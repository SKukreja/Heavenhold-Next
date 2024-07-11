"use client";

import { useState, useEffect, FormEvent } from "react";

interface Post {
  title: string;
  content: string;
  author: {
    node: {
      username: string;
    };
  };
}

interface UserData {
  id: string;
  username: string;
}

const AuthForm = (): JSX.Element => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [jwt, setJwt] = useState<string>("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setJwt(storedToken);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (jwt) {
      // Fetch posts data when JWT token is available
      fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({
          query: `
            query GetAllPosts {
              posts(where: { status: DRAFT }) {
                nodes {
                  title
                  content
                  author {
                    node {
                      username
                    }
                  }
                }
              }
            }
          `,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setPosts(data?.data?.posts?.nodes || []);
        })
        .catch((error) => {
          console.error("An error occurred:", error);
        });

      // Fetch user data
      fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({
          query: `
            query GetUserData {
              viewer {
                id
                username
              }
            }
          `,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setUserData(data?.data?.viewer || null);
        })
        .catch((error) => {
          console.error("An error occurred:", error);
        });
    }
  }, [jwt]);

  const loginAndFetch = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Logging in user...");

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
              mutation LoginUser {
                login( input: {
                  clientMutationId: "uniqueId",
                  username: "${username}",
                  password: "${password}"
                }){
                  authToken
                }
              }
            `,
        }),
      });

      const { data } = await response.json();

      if (data?.login?.authToken) {
        // Store JWT token in localStorage
        localStorage.setItem("authToken", data.login.authToken);
        setJwt(data.login.authToken);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setLoginError("Failed to log in");
    }
  };

  const createDraftPost = async () => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({
          query: `
              mutation CreateDraftPost($title: String!, $content: String!) {
                createPost(input: { content: $content, title: $title, status: DRAFT, authorId: "1" }) {
                  post {
                    title
                    content
                  }
                }
              }
            `,
          variables: {
            title: title,
            content: content,
          },
        }),
      });

      const responseData = await response.json();
      console.log("Created post:", responseData);

      alert("Draft post created successfully!");
      setTitle(""); // Clear the title
      setContent(""); // Clear the content
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const logout = () => {
    // Remove JWT token from localStorage
    localStorage.removeItem("authToken");
    setJwt("");
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : jwt ? (
        <div>
          <button
            onClick={logout}
            type="button"
            className="px-4 py-2 font-semibold text-white bg-green-500 rounded hover:bg-green-600"
          >
            Logout
          </button>
          {userData && (
            <span className="ml-4 text-blue-900">
              Welcome, {userData.username}
            </span>
          )}
        </div>
      ) : (
        <form onSubmit={loginAndFetch}>
          <label htmlFor="usernameInput">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="usernameInput"
          />
          <label htmlFor="passwordInput">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="passwordInput"
          />
          <button type="submit">Login</button>
        </form>
      )}
      {loginError && <p className="text-red-500">{loginError}</p>}
      {jwt && (
        <section className="mb-8">
          <h3 className="mb-2 font-semibold text-primary">Draft Posts</h3>
          <ul>
            {posts.map((post) => (
              <li key={post.title} className="card">
                <h4 className="text-lg font-medium">{post.title}</h4>
                <p dangerouslySetInnerHTML={{ __html: post.content }} />
                <span>Author: {post.author.node.username}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
      {jwt && (
        <section>
          <div className="mb-4">
            <h3 className="mb-2 font-semibold text-primary">
              Create A Draft Post
            </h3>
            <label htmlFor="titleInput">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="titleInput"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <label htmlFor="contentInput">Content</label>
          <textarea
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            id="contentInput"
            className="block w-full p-2 border border-gray-300 rounded"
            rows={4}
          />
          <br />
          <button
            type="button"
            className="px-4 py-2 font-semibold text-white bg-green-500 rounded hover:bg-green-600"
            onClick={createDraftPost}
          >
            Create A New Draft Post
          </button>
        </section>
      )}
    </>
  );
};

export default AuthForm;

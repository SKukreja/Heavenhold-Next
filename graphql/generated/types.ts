import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Acfe_AdvancedLink = {
  linkText: Maybe<Scalars['String']['output']>;
  shouldOpenInNewWindow: Maybe<Scalars['Boolean']['output']>;
};

export type Acfe_AdvancedLink_ContentNode = Acfe_AdvancedLink & {
  __typename?: 'ACFE_AdvancedLink_ContentNode';
  contentNode: Maybe<ContentNode>;
  linkText: Maybe<Scalars['String']['output']>;
  shouldOpenInNewWindow: Maybe<Scalars['Boolean']['output']>;
};

export type Acfe_AdvancedLink_TermNode = Acfe_AdvancedLink & {
  __typename?: 'ACFE_AdvancedLink_TermNode';
  linkText: Maybe<Scalars['String']['output']>;
  shouldOpenInNewWindow: Maybe<Scalars['Boolean']['output']>;
  term: Maybe<TermNode>;
};

export type Acfe_AdvancedLink_Url = Acfe_AdvancedLink & {
  __typename?: 'ACFE_AdvancedLink_Url';
  linkText: Maybe<Scalars['String']['output']>;
  shouldOpenInNewWindow: Maybe<Scalars['Boolean']['output']>;
  /** The url linked to */
  url: Maybe<Scalars['String']['output']>;
};

/** Connection between the Collections_Fields type and the ContentNode type */
export type AcfContentNodeConnection = Connection & ContentNodeConnection & {
  __typename?: 'AcfContentNodeConnection';
  /** Edges for the AcfContentNodeConnection connection */
  edges: Array<AcfContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: AcfContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type AcfContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'AcfContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;AcfContentNodeConnection&quot; */
export type AcfContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'AcfContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** A Field Group managed by ACF */
export type AcfFieldGroup = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
};

/** Fields associated with an ACF Field Group */
export type AcfFieldGroupFields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
};

/** Connection between the Banner_Fields type and the MediaItem type */
export type AcfMediaItemConnectionEdge = Edge & MediaItemConnectionEdge & OneToOneConnection & {
  __typename?: 'AcfMediaItemConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  node: MediaItem;
};

/** Connection between the ItemInformation_Fields type and the TermNode type */
export type AcfTermNodeConnection = Connection & TermNodeConnection & {
  __typename?: 'AcfTermNodeConnection';
  /** Edges for the AcfTermNodeConnection connection */
  edges: Array<AcfTermNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<TermNode>;
  /** Information about pagination in a connection. */
  pageInfo: AcfTermNodeConnectionPageInfo;
};

/** An edge in a connection */
export type AcfTermNodeConnectionEdge = Edge & TermNodeConnectionEdge & {
  __typename?: 'AcfTermNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: TermNode;
};

/** Page Info on the &quot;AcfTermNodeConnection&quot; */
export type AcfTermNodeConnectionPageInfo = PageInfo & TermNodeConnectionPageInfo & WpPageInfo & {
  __typename?: 'AcfTermNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export type Avatar = {
  __typename?: 'Avatar';
  /** URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo). */
  default: Maybe<Scalars['String']['output']>;
  /** HTML attributes to insert in the IMG element. Is not sanitized. */
  extraAttr: Maybe<Scalars['String']['output']>;
  /** Whether to always show the default image, never the Gravatar. */
  forceDefault: Maybe<Scalars['Boolean']['output']>;
  /** Whether the avatar was successfully found. */
  foundAvatar: Maybe<Scalars['Boolean']['output']>;
  /** Height of the avatar image. */
  height: Maybe<Scalars['Int']['output']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order. */
  rating: Maybe<Scalars['String']['output']>;
  /** Type of url scheme to use. Typically HTTP vs. HTTPS. */
  scheme: Maybe<Scalars['String']['output']>;
  /** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
  size: Maybe<Scalars['Int']['output']>;
  /** URL for the gravatar image source. */
  url: Maybe<Scalars['String']['output']>;
  /** Width of the avatar image. */
  width: Maybe<Scalars['Int']['output']>;
};

/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */
export enum AvatarRatingEnum {
  /** Indicates a G level avatar rating level. */
  G = 'G',
  /** Indicates a PG level avatar rating level. */
  Pg = 'PG',
  /** Indicates an R level avatar rating level. */
  R = 'R',
  /** Indicates an X level avatar rating level. */
  X = 'X'
}

/** The &quot;Banner&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type Banner = AcfFieldGroup & AcfFieldGroupFields & Banner_Fields & {
  __typename?: 'Banner';
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;Banner&quot; Field Group */
  isBanner: Maybe<Scalars['Boolean']['output']>;
  /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;Banner&quot; Field Group */
  isBannerOrnament: Maybe<Scalars['Boolean']['output']>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;Banner&quot; Field Group */
  leftOrnament: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;Banner&quot; Field Group */
  rightOrnament: Maybe<AcfMediaItemConnectionEdge>;
};

/** Interface representing fields of the ACF &quot;Banner&quot; Field Group */
export type Banner_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;Banner&quot; Field Group */
  isBanner: Maybe<Scalars['Boolean']['output']>;
  /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;Banner&quot; Field Group */
  isBannerOrnament: Maybe<Scalars['Boolean']['output']>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;Banner&quot; Field Group */
  leftOrnament: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;Banner&quot; Field Group */
  rightOrnament: Maybe<AcfMediaItemConnectionEdge>;
};

/** The category type */
export type Category = DatabaseIdentifier & HierarchicalNode & HierarchicalTermNode & MenuItemLinkable & Node & TermNode & UniformResourceIdentifiable & {
  __typename?: 'Category';
  /** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors: Maybe<CategoryToAncestorsCategoryConnection>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  categoryId: Maybe<Scalars['Int']['output']>;
  /** Connection between the category type and its children categories. */
  children: Maybe<CategoryToCategoryConnection>;
  /** Connection between the Category type and the ContentNode type */
  contentNodes: Maybe<CategoryToContentNodeConnection>;
  /** The number of objects connected to the object */
  count: Maybe<Scalars['Int']['output']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** The description of the object */
  description: Maybe<Scalars['String']['output']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The globally unique ID for the object */
  id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is restricted from the current viewer */
  isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** The link to the term */
  link: Maybe<Scalars['String']['output']>;
  /** The human friendly name of the object. */
  name: Maybe<Scalars['String']['output']>;
  /** Connection between the category type and its parent category. */
  parent: Maybe<CategoryToParentCategoryConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the parent node. */
  parentId: Maybe<Scalars['ID']['output']>;
  /** Connection between the Category type and the post type */
  posts: Maybe<CategoryToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug: Maybe<Scalars['String']['output']>;
  /** Connection between the Category type and the Taxonomy type */
  taxonomy: Maybe<CategoryToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName: Maybe<Scalars['String']['output']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId: Maybe<Scalars['Int']['output']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId: Maybe<Scalars['Int']['output']>;
  /** The unique resource identifier path */
  uri: Maybe<Scalars['String']['output']>;
};


/** The category type */
export type CategoryAncestorsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The category type */
export type CategoryChildrenArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<CategoryToCategoryConnectionWhereArgs>;
};


/** The category type */
export type CategoryContentNodesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<CategoryToContentNodeConnectionWhereArgs>;
};


/** The category type */
export type CategoryEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The category type */
export type CategoryEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The category type */
export type CategoryPostsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<CategoryToPostConnectionWhereArgs>;
};

/** Connection to category Nodes */
export type CategoryConnection = {
  /** A list of edges (relational context) between RootQuery and connected category Nodes */
  edges: Array<CategoryConnectionEdge>;
  /** A list of connected category Nodes */
  nodes: Array<Category>;
  /** Information about pagination in a connection. */
  pageInfo: CategoryConnectionPageInfo;
};

/** Edge between a Node and a connected category */
export type CategoryConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected category Node */
  node: Category;
};

/** Page Info on the connected CategoryConnectionEdge */
export type CategoryConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum CategoryIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the Category type and the category type */
export type CategoryToAncestorsCategoryConnection = CategoryConnection & Connection & {
  __typename?: 'CategoryToAncestorsCategoryConnection';
  /** Edges for the CategoryToAncestorsCategoryConnection connection */
  edges: Array<CategoryToAncestorsCategoryConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Category>;
  /** Information about pagination in a connection. */
  pageInfo: CategoryToAncestorsCategoryConnectionPageInfo;
};

/** An edge in a connection */
export type CategoryToAncestorsCategoryConnectionEdge = CategoryConnectionEdge & Edge & {
  __typename?: 'CategoryToAncestorsCategoryConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Category;
};

/** Page Info on the &quot;CategoryToAncestorsCategoryConnection&quot; */
export type CategoryToAncestorsCategoryConnectionPageInfo = CategoryConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'CategoryToAncestorsCategoryConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Connection between the Category type and the category type */
export type CategoryToCategoryConnection = CategoryConnection & Connection & {
  __typename?: 'CategoryToCategoryConnection';
  /** Edges for the CategoryToCategoryConnection connection */
  edges: Array<CategoryToCategoryConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Category>;
  /** Information about pagination in a connection. */
  pageInfo: CategoryToCategoryConnectionPageInfo;
};

/** An edge in a connection */
export type CategoryToCategoryConnectionEdge = CategoryConnectionEdge & Edge & {
  __typename?: 'CategoryToCategoryConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Category;
};

/** Page Info on the &quot;CategoryToCategoryConnection&quot; */
export type CategoryToCategoryConnectionPageInfo = CategoryConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'CategoryToCategoryConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the CategoryToCategoryConnection connection */
export type CategoryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache: InputMaybe<Scalars['Boolean']['input']>;
};

/** Connection between the Category type and the ContentNode type */
export type CategoryToContentNodeConnection = Connection & ContentNodeConnection & {
  __typename?: 'CategoryToContentNodeConnection';
  /** Edges for the CategoryToContentNodeConnection connection */
  edges: Array<CategoryToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: CategoryToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type CategoryToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'CategoryToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;CategoryToContentNodeConnection&quot; */
export type CategoryToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'CategoryToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the CategoryToContentNodeConnection connection */
export type CategoryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes: InputMaybe<Array<InputMaybe<ContentTypesOfCategoryEnum>>>;
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the Category type and the category type */
export type CategoryToParentCategoryConnectionEdge = CategoryConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'CategoryToParentCategoryConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  node: Category;
};

/** Connection between the Category type and the post type */
export type CategoryToPostConnection = Connection & PostConnection & {
  __typename?: 'CategoryToPostConnection';
  /** Edges for the CategoryToPostConnection connection */
  edges: Array<CategoryToPostConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: CategoryToPostConnectionPageInfo;
};

/** An edge in a connection */
export type CategoryToPostConnectionEdge = Edge & PostConnectionEdge & {
  __typename?: 'CategoryToPostConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Post;
};

/** Page Info on the &quot;CategoryToPostConnection&quot; */
export type CategoryToPostConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  __typename?: 'CategoryToPostConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the CategoryToPostConnection connection */
export type CategoryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Category ID */
  categoryId: InputMaybe<Scalars['Int']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Use Category Slug */
  categoryName: InputMaybe<Scalars['String']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag: InputMaybe<Scalars['String']['input']>;
  /** Use Tag ID */
  tagId: InputMaybe<Scalars['String']['input']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the Category type and the Taxonomy type */
export type CategoryToTaxonomyConnectionEdge = Edge & OneToOneConnection & TaxonomyConnectionEdge & {
  __typename?: 'CategoryToTaxonomyConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  node: Taxonomy;
};

/** The collection type */
export type Collection = ContentNode & DatabaseIdentifier & MenuItemLinkable & Node & NodeWithExcerpt & NodeWithRevisions & NodeWithTemplate & NodeWithTitle & Previewable & UniformResourceIdentifiable & WithAcfCollections & WithAcfGuideFields & {
  __typename?: 'Collection';
  /**
   * The ancestors of the content node.
   * @deprecated This content type is not hierarchical and typically will not have ancestors
   */
  ancestors: Maybe<CollectionToCollectionConnection>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  collectionId: Scalars['Int']['output'];
  /** Fields of the Collections ACF Field Group */
  collections: Maybe<Collections>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String']['output'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** Post publishing date. */
  date: Maybe<Scalars['String']['output']>;
  /** The publishing date set in GMT. */
  dateGmt: Maybe<Scalars['String']['output']>;
  /** The desired slug of the post */
  desiredSlug: Maybe<Scalars['String']['output']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure: Maybe<Scalars['String']['output']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The excerpt of the post. */
  excerpt: Maybe<Scalars['String']['output']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid: Maybe<Scalars['String']['output']>;
  /** Fields of the GuideFields ACF Field Group */
  guideFields: Maybe<GuideFields>;
  /** Whether the collections object is password protected. */
  hasPassword: Maybe<Scalars['Boolean']['output']>;
  /** The globally unique identifier of the collections object. */
  id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is a node in the preview state */
  isPreview: Maybe<Scalars['Boolean']['output']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** True if the node is a revision of another node */
  isRevision: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** The user that most recently edited the node */
  lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link: Maybe<Scalars['String']['output']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified: Maybe<Scalars['String']['output']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt: Maybe<Scalars['String']['output']>;
  /**
   * The parent of the content node.
   * @deprecated This content type is not hierarchical and typically will not have a parent
   */
  parent: Maybe<CollectionToParentConnectionEdge>;
  /** The password for the collections object. */
  password: Maybe<Scalars['String']['output']>;
  /** Connection between the Collection type and the collection type */
  preview: Maybe<CollectionToPreviewConnectionEdge>;
  /** The database id of the preview node */
  previewRevisionDatabaseId: Maybe<Scalars['Int']['output']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId: Maybe<Scalars['ID']['output']>;
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  revisionOf: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
  /** Connection between the Collection type and the collection type */
  revisions: Maybe<CollectionToRevisionConnection>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug: Maybe<Scalars['String']['output']>;
  /** The current status of the object */
  status: Maybe<Scalars['String']['output']>;
  /** The template assigned to the node */
  template: Maybe<ContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title: Maybe<Scalars['String']['output']>;
  /** The unique resource identifier path */
  uri: Maybe<Scalars['String']['output']>;
};


/** The collection type */
export type CollectionAncestorsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The collection type */
export type CollectionEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The collection type */
export type CollectionEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The collection type */
export type CollectionExcerptArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The collection type */
export type CollectionRevisionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<CollectionToRevisionConnectionWhereArgs>;
};


/** The collection type */
export type CollectionTitleArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Connection to collection Nodes */
export type CollectionConnection = {
  /** A list of edges (relational context) between RootQuery and connected collection Nodes */
  edges: Array<CollectionConnectionEdge>;
  /** A list of connected collection Nodes */
  nodes: Array<Collection>;
  /** Information about pagination in a connection. */
  pageInfo: CollectionConnectionPageInfo;
};

/** Edge between a Node and a connected collection */
export type CollectionConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected collection Node */
  node: Collection;
};

/** Page Info on the connected CollectionConnectionEdge */
export type CollectionConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum CollectionIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Connection between the Collection type and the collection type */
export type CollectionToCollectionConnection = CollectionConnection & Connection & {
  __typename?: 'CollectionToCollectionConnection';
  /** Edges for the CollectionToCollectionConnection connection */
  edges: Array<CollectionToCollectionConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Collection>;
  /** Information about pagination in a connection. */
  pageInfo: CollectionToCollectionConnectionPageInfo;
};

/** An edge in a connection */
export type CollectionToCollectionConnectionEdge = CollectionConnectionEdge & Edge & {
  __typename?: 'CollectionToCollectionConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated This content type is not hierarchical and typically will not have ancestors
   */
  cursor: Maybe<Scalars['String']['output']>;
  /**
   * The item at the end of the edge
   * @deprecated This content type is not hierarchical and typically will not have ancestors
   */
  node: Collection;
};

/** Page Info on the &quot;CollectionToCollectionConnection&quot; */
export type CollectionToCollectionConnectionPageInfo = CollectionConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'CollectionToCollectionConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Connection between the Collection type and the collection type */
export type CollectionToParentConnectionEdge = CollectionConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'CollectionToParentConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /**
   * The node of the connection, without the edges
   * @deprecated This content type is not hierarchical and typically will not have a parent
   */
  node: Collection;
};

/** Connection between the Collection type and the collection type */
export type CollectionToPreviewConnectionEdge = CollectionConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'CollectionToPreviewConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  node: Collection;
};

/** Connection between the Collection type and the collection type */
export type CollectionToRevisionConnection = CollectionConnection & Connection & {
  __typename?: 'CollectionToRevisionConnection';
  /** Edges for the CollectionToRevisionConnection connection */
  edges: Array<CollectionToRevisionConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Collection>;
  /** Information about pagination in a connection. */
  pageInfo: CollectionToRevisionConnectionPageInfo;
};

/** An edge in a connection */
export type CollectionToRevisionConnectionEdge = CollectionConnectionEdge & Edge & {
  __typename?: 'CollectionToRevisionConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Collection;
};

/** Page Info on the &quot;CollectionToRevisionConnection&quot; */
export type CollectionToRevisionConnectionPageInfo = CollectionConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'CollectionToRevisionConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the CollectionToRevisionConnection connection */
export type CollectionToRevisionConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** The &quot;Collections&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type Collections = AcfFieldGroup & AcfFieldGroupFields & Collections_Fields & {
  __typename?: 'Collections';
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;Collections&quot; Field Group */
  itemLevel: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;Collections&quot; Field Group */
  items: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;radio&quot; Field Type added to the schema as part of the &quot;Collections&quot; Field Group */
  rewardStat: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;Collections&quot; Field Group */
  rewardValue: Maybe<Scalars['Float']['output']>;
};


/** The &quot;Collections&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type CollectionsItemsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** Interface representing fields of the ACF &quot;Collections&quot; Field Group */
export type Collections_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;Collections&quot; Field Group */
  itemLevel: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;Collections&quot; Field Group */
  items: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;radio&quot; Field Type added to the schema as part of the &quot;Collections&quot; Field Group */
  rewardStat: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;Collections&quot; Field Group */
  rewardValue: Maybe<Scalars['Float']['output']>;
};


/** Interface representing fields of the ACF &quot;Collections&quot; Field Group */
export type Collections_FieldsItemsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** A Comment object */
export type Comment = DatabaseIdentifier & Node & UniformResourceIdentifiable & {
  __typename?: 'Comment';
  /** User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL. */
  agent: Maybe<Scalars['String']['output']>;
  /**
   * The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL.
   * @deprecated Deprecated in favor of the `status` field
   */
  approved: Maybe<Scalars['Boolean']['output']>;
  /** The author of the comment */
  author: Maybe<CommentToCommenterConnectionEdge>;
  /** IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL. */
  authorIp: Maybe<Scalars['String']['output']>;
  /**
   * ID for the comment, unique among comments.
   * @deprecated Deprecated in favor of databaseId
   */
  commentId: Maybe<Scalars['Int']['output']>;
  /** Connection between the Comment type and the ContentNode type */
  commentedOn: Maybe<CommentToContentNodeConnectionEdge>;
  /** Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the &quot;comment_content&quot; column in SQL. */
  content: Maybe<Scalars['String']['output']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL. */
  date: Maybe<Scalars['String']['output']>;
  /** Date the comment was posted in GMT. This field is equivalent to WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL. */
  dateGmt: Maybe<Scalars['String']['output']>;
  /** The globally unique identifier for the comment object */
  id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is restricted from the current viewer */
  isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL. */
  karma: Maybe<Scalars['Int']['output']>;
  /** The permalink of the comment */
  link: Maybe<Scalars['String']['output']>;
  /** Connection between the Comment type and the Comment type */
  parent: Maybe<CommentToParentCommentConnectionEdge>;
  /** The database id of the parent comment node or null if it is the root comment */
  parentDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the parent comment node. */
  parentId: Maybe<Scalars['ID']['output']>;
  /** Connection between the Comment type and the Comment type */
  replies: Maybe<CommentToCommentConnection>;
  /** The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL. */
  status: Maybe<CommentStatusEnum>;
  /** Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL. */
  type: Maybe<Scalars['String']['output']>;
  /** The unique resource identifier path */
  uri: Maybe<Scalars['String']['output']>;
};


/** A Comment object */
export type CommentContentArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};


/** A Comment object */
export type CommentParentArgs = {
  where: InputMaybe<CommentToParentCommentConnectionWhereArgs>;
};


/** A Comment object */
export type CommentRepliesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<CommentToCommentConnectionWhereArgs>;
};

/** A Comment Author object */
export type CommentAuthor = Commenter & DatabaseIdentifier & Node & {
  __typename?: 'CommentAuthor';
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar: Maybe<Avatar>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** The email for the comment author */
  email: Maybe<Scalars['String']['output']>;
  /** The globally unique identifier for the comment author object */
  id: Scalars['ID']['output'];
  /** Whether the object is restricted from the current viewer */
  isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** The name for the comment author. */
  name: Maybe<Scalars['String']['output']>;
  /** The url the comment author. */
  url: Maybe<Scalars['String']['output']>;
};


/** A Comment Author object */
export type CommentAuthorAvatarArgs = {
  forceDefault: InputMaybe<Scalars['Boolean']['input']>;
  rating: InputMaybe<AvatarRatingEnum>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

/** Connection to Comment Nodes */
export type CommentConnection = {
  /** A list of edges (relational context) between RootQuery and connected Comment Nodes */
  edges: Array<CommentConnectionEdge>;
  /** A list of connected Comment Nodes */
  nodes: Array<Comment>;
  /** Information about pagination in a connection. */
  pageInfo: CommentConnectionPageInfo;
};

/** Edge between a Node and a connected Comment */
export type CommentConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected Comment Node */
  node: Comment;
};

/** Page Info on the connected CommentConnectionEdge */
export type CommentConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** The Type of Identifier used to fetch a single comment node. Default is "ID". To be used along with the "id" field. */
export enum CommentNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** The status of the comment object. */
export enum CommentStatusEnum {
  /** Comments with the Approved status */
  Approve = 'APPROVE',
  /** Comments with the Unapproved status */
  Hold = 'HOLD',
  /** Comments with the Spam status */
  Spam = 'SPAM',
  /** Comments with the Trash status */
  Trash = 'TRASH'
}

/** Connection between the Comment type and the Comment type */
export type CommentToCommentConnection = CommentConnection & Connection & {
  __typename?: 'CommentToCommentConnection';
  /** Edges for the CommentToCommentConnection connection */
  edges: Array<CommentToCommentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Comment>;
  /** Information about pagination in a connection. */
  pageInfo: CommentToCommentConnectionPageInfo;
};

/** An edge in a connection */
export type CommentToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  __typename?: 'CommentToCommentConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Comment;
};

/** Page Info on the &quot;CommentToCommentConnection&quot; */
export type CommentToCommentConnectionPageInfo = CommentConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'CommentToCommentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the CommentToCommentConnection connection */
export type CommentToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail: InputMaybe<Scalars['String']['input']>;
  /** Array of author IDs to include comments for. */
  authorIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Comment author URL. */
  authorUrl: InputMaybe<Scalars['String']['input']>;
  /** Array of comment IDs to include. */
  commentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Include comments of a given type. */
  commentType: InputMaybe<Scalars['String']['input']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn: InputMaybe<Scalars['String']['input']>;
  /** Content object author ID to limit results by. */
  contentAuthor: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId: InputMaybe<Scalars['ID']['input']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName: InputMaybe<Scalars['String']['input']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent: InputMaybe<Scalars['Int']['input']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Karma score to retrieve matching comments for. */
  karma: InputMaybe<Scalars['Int']['input']>;
  /** The cardinality of the order of the connection */
  order: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent: InputMaybe<Scalars['Int']['input']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Comment status to limit results by. */
  status: InputMaybe<Scalars['String']['input']>;
  /** Include comments for a specific user ID. */
  userId: InputMaybe<Scalars['ID']['input']>;
};

/** Connection between the Comment type and the Commenter type */
export type CommentToCommenterConnectionEdge = CommenterConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'CommentToCommenterConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  node: Commenter;
};

/** Connection between the Comment type and the ContentNode type */
export type CommentToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'CommentToContentNodeConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  node: ContentNode;
};

/** Connection between the Comment type and the Comment type */
export type CommentToParentCommentConnectionEdge = CommentConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'CommentToParentCommentConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  node: Comment;
};

/** Arguments for filtering the CommentToParentCommentConnection connection */
export type CommentToParentCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail: InputMaybe<Scalars['String']['input']>;
  /** Array of author IDs to include comments for. */
  authorIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Comment author URL. */
  authorUrl: InputMaybe<Scalars['String']['input']>;
  /** Array of comment IDs to include. */
  commentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Include comments of a given type. */
  commentType: InputMaybe<Scalars['String']['input']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn: InputMaybe<Scalars['String']['input']>;
  /** Content object author ID to limit results by. */
  contentAuthor: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId: InputMaybe<Scalars['ID']['input']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName: InputMaybe<Scalars['String']['input']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent: InputMaybe<Scalars['Int']['input']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Karma score to retrieve matching comments for. */
  karma: InputMaybe<Scalars['Int']['input']>;
  /** The cardinality of the order of the connection */
  order: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent: InputMaybe<Scalars['Int']['input']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Comment status to limit results by. */
  status: InputMaybe<Scalars['String']['input']>;
  /** Include comments for a specific user ID. */
  userId: InputMaybe<Scalars['ID']['input']>;
};

/** The author of a comment */
export type Commenter = {
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar: Maybe<Avatar>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int']['output'];
  /** The email address of the author of a comment. */
  email: Maybe<Scalars['String']['output']>;
  /** The globally unique identifier for the comment author. */
  id: Scalars['ID']['output'];
  /** Whether the author information is considered restricted. (not fully public) */
  isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** The name of the author of a comment. */
  name: Maybe<Scalars['String']['output']>;
  /** The url of the author of a comment. */
  url: Maybe<Scalars['String']['output']>;
};

/** Edge between a Node and a connected Commenter */
export type CommenterConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected Commenter Node */
  node: Commenter;
};

/** Options for ordering the connection */
export enum CommentsConnectionOrderbyEnum {
  /** Order by browser user agent of the commenter. */
  CommentAgent = 'COMMENT_AGENT',
  /** Order by approval status of the comment. */
  CommentApproved = 'COMMENT_APPROVED',
  /** Order by name of the comment author. */
  CommentAuthor = 'COMMENT_AUTHOR',
  /** Order by e-mail of the comment author. */
  CommentAuthorEmail = 'COMMENT_AUTHOR_EMAIL',
  /** Order by IP address of the comment author. */
  CommentAuthorIp = 'COMMENT_AUTHOR_IP',
  /** Order by URL address of the comment author. */
  CommentAuthorUrl = 'COMMENT_AUTHOR_URL',
  /** Order by the comment contents. */
  CommentContent = 'COMMENT_CONTENT',
  /** Order by date/time timestamp of the comment. */
  CommentDate = 'COMMENT_DATE',
  /** Order by GMT timezone date/time timestamp of the comment. */
  CommentDateGmt = 'COMMENT_DATE_GMT',
  /** Order by the globally unique identifier for the comment object */
  CommentId = 'COMMENT_ID',
  /** Order by the array list of comment IDs listed in the where clause. */
  CommentIn = 'COMMENT_IN',
  /** Order by the comment karma score. */
  CommentKarma = 'COMMENT_KARMA',
  /** Order by the comment parent ID. */
  CommentParent = 'COMMENT_PARENT',
  /** Order by the post object ID. */
  CommentPostId = 'COMMENT_POST_ID',
  /** Order by the the type of comment, such as 'comment', 'pingback', or 'trackback'. */
  CommentType = 'COMMENT_TYPE',
  /** Order by the user ID. */
  UserId = 'USER_ID'
}

/** A plural connection from one Node Type in the Graph to another Node Type, with support for relational data via &quot;edges&quot;. */
export type Connection = {
  /** A list of edges (relational context) between connected nodes */
  edges: Array<Edge>;
  /** A list of connected nodes */
  nodes: Array<Node>;
  /** Information about pagination in a connection. */
  pageInfo: PageInfo;
};

/** Nodes used to manage content */
export type ContentNode = {
  /** Connection between the ContentNode type and the ContentType type */
  contentType: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String']['output'];
  /** The ID of the node in the database. */
  databaseId: Scalars['Int']['output'];
  /** Post publishing date. */
  date: Maybe<Scalars['String']['output']>;
  /** The publishing date set in GMT. */
  dateGmt: Maybe<Scalars['String']['output']>;
  /** The desired slug of the post */
  desiredSlug: Maybe<Scalars['String']['output']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure: Maybe<Scalars['String']['output']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid: Maybe<Scalars['String']['output']>;
  /** The globally unique ID for the object */
  id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is a node in the preview state */
  isPreview: Maybe<Scalars['Boolean']['output']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** The user that most recently edited the node */
  lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link: Maybe<Scalars['String']['output']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified: Maybe<Scalars['String']['output']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt: Maybe<Scalars['String']['output']>;
  /** The database id of the preview node */
  previewRevisionDatabaseId: Maybe<Scalars['Int']['output']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId: Maybe<Scalars['ID']['output']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug: Maybe<Scalars['String']['output']>;
  /** The current status of the object */
  status: Maybe<Scalars['String']['output']>;
  /** The template assigned to a node of content */
  template: Maybe<ContentTemplate>;
  /** The unique resource identifier path */
  uri: Maybe<Scalars['String']['output']>;
};


/** Nodes used to manage content */
export type ContentNodeEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** Nodes used to manage content */
export type ContentNodeEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** Connection to ContentNode Nodes */
export type ContentNodeConnection = {
  /** A list of edges (relational context) between ContentType and connected ContentNode Nodes */
  edges: Array<ContentNodeConnectionEdge>;
  /** A list of connected ContentNode Nodes */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: ContentNodeConnectionPageInfo;
};

/** Edge between a Node and a connected ContentNode */
export type ContentNodeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected ContentNode Node */
  node: ContentNode;
};

/** Page Info on the connected ContentNodeConnectionEdge */
export type ContentNodeConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ContentNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Connection between the ContentNode type and the ContentType type */
export type ContentNodeToContentTypeConnectionEdge = ContentTypeConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'ContentNodeToContentTypeConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  node: ContentType;
};

/** Connection between the ContentNode type and the User type */
export type ContentNodeToEditLastConnectionEdge = Edge & OneToOneConnection & UserConnectionEdge & {
  __typename?: 'ContentNodeToEditLastConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  node: User;
};

/** Connection between the ContentNode type and the User type */
export type ContentNodeToEditLockConnectionEdge = Edge & OneToOneConnection & UserConnectionEdge & {
  __typename?: 'ContentNodeToEditLockConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The timestamp for when the node was last edited */
  lockTimestamp: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  node: User;
};

/** Connection between the ContentNode type and the EnqueuedScript type */
export type ContentNodeToEnqueuedScriptConnection = Connection & EnqueuedScriptConnection & {
  __typename?: 'ContentNodeToEnqueuedScriptConnection';
  /** Edges for the ContentNodeToEnqueuedScriptConnection connection */
  edges: Array<ContentNodeToEnqueuedScriptConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedScript>;
  /** Information about pagination in a connection. */
  pageInfo: ContentNodeToEnqueuedScriptConnectionPageInfo;
};

/** An edge in a connection */
export type ContentNodeToEnqueuedScriptConnectionEdge = Edge & EnqueuedScriptConnectionEdge & {
  __typename?: 'ContentNodeToEnqueuedScriptConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: EnqueuedScript;
};

/** Page Info on the &quot;ContentNodeToEnqueuedScriptConnection&quot; */
export type ContentNodeToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'ContentNodeToEnqueuedScriptConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Connection between the ContentNode type and the EnqueuedStylesheet type */
export type ContentNodeToEnqueuedStylesheetConnection = Connection & EnqueuedStylesheetConnection & {
  __typename?: 'ContentNodeToEnqueuedStylesheetConnection';
  /** Edges for the ContentNodeToEnqueuedStylesheetConnection connection */
  edges: Array<ContentNodeToEnqueuedStylesheetConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedStylesheet>;
  /** Information about pagination in a connection. */
  pageInfo: ContentNodeToEnqueuedStylesheetConnectionPageInfo;
};

/** An edge in a connection */
export type ContentNodeToEnqueuedStylesheetConnectionEdge = Edge & EnqueuedStylesheetConnectionEdge & {
  __typename?: 'ContentNodeToEnqueuedStylesheetConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: EnqueuedStylesheet;
};

/** Page Info on the &quot;ContentNodeToEnqueuedStylesheetConnection&quot; */
export type ContentNodeToEnqueuedStylesheetConnectionPageInfo = EnqueuedStylesheetConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'ContentNodeToEnqueuedStylesheetConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** The template assigned to a node of content */
export type ContentTemplate = {
  /** The name of the template */
  templateName: Maybe<Scalars['String']['output']>;
};

/** An Post Type object */
export type ContentType = Node & UniformResourceIdentifiable & {
  __typename?: 'ContentType';
  /** Whether this content type should can be exported. */
  canExport: Maybe<Scalars['Boolean']['output']>;
  /** Connection between the ContentType type and the Taxonomy type */
  connectedTaxonomies: Maybe<ContentTypeToTaxonomyConnection>;
  /** Connection between the ContentType type and the ContentNode type */
  contentNodes: Maybe<ContentTypeToContentNodeConnection>;
  /** Whether content of this type should be deleted when the author of it is deleted from the system. */
  deleteWithUser: Maybe<Scalars['Boolean']['output']>;
  /** Description of the content type. */
  description: Maybe<Scalars['String']['output']>;
  /** Whether to exclude nodes of this content type from front end search results. */
  excludeFromSearch: Maybe<Scalars['Boolean']['output']>;
  /** The plural name of the content type within the GraphQL Schema. */
  graphqlPluralName: Maybe<Scalars['String']['output']>;
  /** The singular name of the content type within the GraphQL Schema. */
  graphqlSingleName: Maybe<Scalars['String']['output']>;
  /** Whether this content type should have archives. Content archives are generated by type and by date. */
  hasArchive: Maybe<Scalars['Boolean']['output']>;
  /** Whether the content type is hierarchical, for example pages. */
  hierarchical: Maybe<Scalars['Boolean']['output']>;
  /** The globally unique identifier of the post-type object. */
  id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether this page is set to the static front page. */
  isFrontPage: Scalars['Boolean']['output'];
  /** Whether this page is set to the blog posts page. */
  isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is restricted from the current viewer */
  isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** Display name of the content type. */
  label: Maybe<Scalars['String']['output']>;
  /** Details about the content type labels. */
  labels: Maybe<PostTypeLabelDetails>;
  /** The name of the icon file to display as a menu icon. */
  menuIcon: Maybe<Scalars['String']['output']>;
  /** The position of this post type in the menu. Only applies if show_in_menu is true. */
  menuPosition: Maybe<Scalars['Int']['output']>;
  /** The internal name of the post type. This should not be used for display purposes. */
  name: Maybe<Scalars['String']['output']>;
  /** Whether a content type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention. */
  public: Maybe<Scalars['Boolean']['output']>;
  /** Whether queries can be performed on the front end for the content type as part of parse_request(). */
  publiclyQueryable: Maybe<Scalars['Boolean']['output']>;
  /** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
  restBase: Maybe<Scalars['String']['output']>;
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass: Maybe<Scalars['String']['output']>;
  /** Makes this content type available via the admin bar. */
  showInAdminBar: Maybe<Scalars['Boolean']['output']>;
  /** Whether to add the content type to the GraphQL Schema. */
  showInGraphql: Maybe<Scalars['Boolean']['output']>;
  /** Where to show the content type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that. */
  showInMenu: Maybe<Scalars['Boolean']['output']>;
  /** Makes this content type available for selection in navigation menus. */
  showInNavMenus: Maybe<Scalars['Boolean']['output']>;
  /** Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace. */
  showInRest: Maybe<Scalars['Boolean']['output']>;
  /** Whether to generate and allow a UI for managing this content type in the admin. */
  showUi: Maybe<Scalars['Boolean']['output']>;
  /** The unique resource identifier path */
  uri: Maybe<Scalars['String']['output']>;
};


/** An Post Type object */
export type ContentTypeConnectedTaxonomiesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** An Post Type object */
export type ContentTypeContentNodesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ContentTypeToContentNodeConnectionWhereArgs>;
};

/** Connection to ContentType Nodes */
export type ContentTypeConnection = {
  /** A list of edges (relational context) between RootQuery and connected ContentType Nodes */
  edges: Array<ContentTypeConnectionEdge>;
  /** A list of connected ContentType Nodes */
  nodes: Array<ContentType>;
  /** Information about pagination in a connection. */
  pageInfo: ContentTypeConnectionPageInfo;
};

/** Edge between a Node and a connected ContentType */
export type ContentTypeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected ContentType Node */
  node: ContentType;
};

/** Page Info on the connected ContentTypeConnectionEdge */
export type ContentTypeConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Allowed Content Types */
export enum ContentTypeEnum {
  /** The Type of Content object */
  Attachment = 'ATTACHMENT',
  /** The Type of Content object */
  Collections = 'COLLECTIONS',
  /** The Type of Content object */
  GraphqlDocument = 'GRAPHQL_DOCUMENT',
  /** The Type of Content object */
  Heroes = 'HEROES',
  /** The Type of Content object */
  Items = 'ITEMS',
  /** The Type of Content object */
  Page = 'PAGE',
  /** The Type of Content object */
  Post = 'POST',
  /** The Type of Content object */
  Teams = 'TEAMS'
}

/** The Type of Identifier used to fetch a single Content Type node. To be used along with the "id" field. Default is "ID". */
export enum ContentTypeIdTypeEnum {
  /** The globally unique ID */
  Id = 'ID',
  /** The name of the content type. */
  Name = 'NAME'
}

/** Connection between the ContentType type and the ContentNode type */
export type ContentTypeToContentNodeConnection = Connection & ContentNodeConnection & {
  __typename?: 'ContentTypeToContentNodeConnection';
  /** Edges for the ContentTypeToContentNodeConnection connection */
  edges: Array<ContentTypeToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: ContentTypeToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type ContentTypeToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'ContentTypeToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;ContentTypeToContentNodeConnection&quot; */
export type ContentTypeToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'ContentTypeToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the ContentTypeToContentNodeConnection connection */
export type ContentTypeToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the ContentType type and the Taxonomy type */
export type ContentTypeToTaxonomyConnection = Connection & TaxonomyConnection & {
  __typename?: 'ContentTypeToTaxonomyConnection';
  /** Edges for the ContentTypeToTaxonomyConnection connection */
  edges: Array<ContentTypeToTaxonomyConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Taxonomy>;
  /** Information about pagination in a connection. */
  pageInfo: ContentTypeToTaxonomyConnectionPageInfo;
};

/** An edge in a connection */
export type ContentTypeToTaxonomyConnectionEdge = Edge & TaxonomyConnectionEdge & {
  __typename?: 'ContentTypeToTaxonomyConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Taxonomy;
};

/** Page Info on the &quot;ContentTypeToTaxonomyConnection&quot; */
export type ContentTypeToTaxonomyConnectionPageInfo = PageInfo & TaxonomyConnectionPageInfo & WpPageInfo & {
  __typename?: 'ContentTypeToTaxonomyConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Allowed Content Types of the Category taxonomy. */
export enum ContentTypesOfCategoryEnum {
  /** The Type of Content object */
  Post = 'POST'
}

/** Allowed Content Types of the GraphqlDocumentGroup taxonomy. */
export enum ContentTypesOfGraphqlDocumentGroupEnum {
  /** The Type of Content object */
  GraphqlDocument = 'GRAPHQL_DOCUMENT'
}

/** Allowed Content Types of the ItemType taxonomy. */
export enum ContentTypesOfItemTypeEnum {
  /** The Type of Content object */
  Items = 'ITEMS'
}

/** Allowed Content Types of the PostFormat taxonomy. */
export enum ContentTypesOfPostFormatEnum {
  /** The Type of Content object */
  Post = 'POST'
}

/** Allowed Content Types of the Tag taxonomy. */
export enum ContentTypesOfTagEnum {
  /** The Type of Content object */
  Post = 'POST'
}

/** The &quot;Costume&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type Costume = AcfFieldGroup & AcfFieldGroupFields & Costume_Fields & {
  __typename?: 'Costume';
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;Costume&quot; Field Group */
  hero: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;Costume&quot; Field Group */
  illustration: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;Costume&quot; Field Group */
  shopRotation: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;Costume&quot; Field Group */
  super: Maybe<Scalars['Boolean']['output']>;
};


/** The &quot;Costume&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type CostumeHeroArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The &quot;Costume&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type CostumeShopRotationArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** Interface representing fields of the ACF &quot;Costume&quot; Field Group */
export type Costume_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;Costume&quot; Field Group */
  hero: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;Costume&quot; Field Group */
  illustration: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;Costume&quot; Field Group */
  shopRotation: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;Costume&quot; Field Group */
  super: Maybe<Scalars['Boolean']['output']>;
};


/** Interface representing fields of the ACF &quot;Costume&quot; Field Group */
export type Costume_FieldsHeroArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** Interface representing fields of the ACF &quot;Costume&quot; Field Group */
export type Costume_FieldsShopRotationArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** Input for the createCategory mutation. */
export type CreateCategoryInput = {
  /** The slug that the category will be an alias of */
  aliasOf: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The description of the category object */
  description: InputMaybe<Scalars['String']['input']>;
  /** The name of the category object to mutate */
  name: Scalars['String']['input'];
  /** The ID of the category that should be set as the parent */
  parentId: InputMaybe<Scalars['ID']['input']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the createCategory mutation. */
export type CreateCategoryPayload = {
  __typename?: 'CreateCategoryPayload';
  /** The created category */
  category: Maybe<Category>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
};

/** Input for the createCollection mutation. */
export type CreateCollectionInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date: InputMaybe<Scalars['String']['input']>;
  /** The excerpt of the object */
  excerpt: InputMaybe<Scalars['String']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder: InputMaybe<Scalars['Int']['input']>;
  /** The password used to protect the content of the object */
  password: InputMaybe<Scalars['String']['input']>;
  /** The slug of the object */
  slug: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the createCollection mutation. */
export type CreateCollectionPayload = {
  __typename?: 'CreateCollectionPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The Post object mutation type. */
  collection: Maybe<Collection>;
};

/** Input for the createComment mutation. */
export type CreateCommentInput = {
  /** The approval status of the comment. */
  approved: InputMaybe<Scalars['String']['input']>;
  /** The name of the comment's author. */
  author: InputMaybe<Scalars['String']['input']>;
  /** The email of the comment's author. */
  authorEmail: InputMaybe<Scalars['String']['input']>;
  /** The url of the comment's author. */
  authorUrl: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The database ID of the post object the comment belongs to. */
  commentOn: InputMaybe<Scalars['Int']['input']>;
  /** Content of the comment. */
  content: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date: InputMaybe<Scalars['String']['input']>;
  /** Parent comment ID of current comment. */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** The approval status of the comment */
  status: InputMaybe<CommentStatusEnum>;
  /** Type of comment. */
  type: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the createComment mutation. */
export type CreateCommentPayload = {
  __typename?: 'CreateCommentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The comment that was created */
  comment: Maybe<Comment>;
  /** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
  success: Maybe<Scalars['Boolean']['output']>;
};

/** Input for the createGraphqlDocumentGroup mutation. */
export type CreateGraphqlDocumentGroupInput = {
  /** The slug that the graphql_document_group will be an alias of */
  aliasOf: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The description of the graphql_document_group object */
  description: InputMaybe<Scalars['String']['input']>;
  /** The name of the graphql_document_group object to mutate */
  name: Scalars['String']['input'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the createGraphqlDocumentGroup mutation. */
export type CreateGraphqlDocumentGroupPayload = {
  __typename?: 'CreateGraphqlDocumentGroupPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The created graphql_document_group */
  graphqlDocumentGroup: Maybe<GraphqlDocumentGroup>;
};

/** Input for the createGraphqlDocument mutation. */
export type CreateGraphqlDocumentInput = {
  /** Alias names for saved GraphQL query documents */
  alias: InputMaybe<Array<Scalars['String']['input']>>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The content of the object */
  content: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date: InputMaybe<Scalars['String']['input']>;
  /** Description for the saved GraphQL document */
  description: InputMaybe<Scalars['String']['input']>;
  /** Allow, deny or default access grant for specific query */
  grant: InputMaybe<Scalars['String']['input']>;
  /** Set connections between the graphqlDocument and graphqlDocumentGroups */
  graphqlDocumentGroups: InputMaybe<GraphqlDocumentGraphqlDocumentGroupsInput>;
  /** HTTP Cache-Control max-age directive for a saved GraphQL document */
  maxAgeHeader: InputMaybe<Scalars['Int']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder: InputMaybe<Scalars['Int']['input']>;
  /** The password used to protect the content of the object */
  password: InputMaybe<Scalars['String']['input']>;
  /** The slug of the object */
  slug: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the createGraphqlDocument mutation. */
export type CreateGraphqlDocumentPayload = {
  __typename?: 'CreateGraphqlDocumentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The Post object mutation type. */
  graphqlDocument: Maybe<GraphqlDocument>;
};

/** Input for the createHero mutation. */
export type CreateHeroInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The comment status for the object */
  commentStatus: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date: InputMaybe<Scalars['String']['input']>;
  /** The excerpt of the object */
  excerpt: InputMaybe<Scalars['String']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder: InputMaybe<Scalars['Int']['input']>;
  /** The password used to protect the content of the object */
  password: InputMaybe<Scalars['String']['input']>;
  /** The slug of the object */
  slug: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the createHero mutation. */
export type CreateHeroPayload = {
  __typename?: 'CreateHeroPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The Post object mutation type. */
  hero: Maybe<Hero>;
};

/** Input for the createItem mutation. */
export type CreateItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The comment status for the object */
  commentStatus: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date: InputMaybe<Scalars['String']['input']>;
  /** The excerpt of the object */
  excerpt: InputMaybe<Scalars['String']['input']>;
  /** Set connections between the item and itemTypes */
  itemTypes: InputMaybe<ItemItemTypesInput>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder: InputMaybe<Scalars['Int']['input']>;
  /** The password used to protect the content of the object */
  password: InputMaybe<Scalars['String']['input']>;
  /** The slug of the object */
  slug: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the createItem mutation. */
export type CreateItemPayload = {
  __typename?: 'CreateItemPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The Post object mutation type. */
  item: Maybe<Item>;
};

/** Input for the createItemType mutation. */
export type CreateItemTypeInput = {
  /** The slug that the item_categories will be an alias of */
  aliasOf: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The description of the item_categories object */
  description: InputMaybe<Scalars['String']['input']>;
  /** The name of the item_categories object to mutate */
  name: Scalars['String']['input'];
  /** The ID of the item_categories that should be set as the parent */
  parentId: InputMaybe<Scalars['ID']['input']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the createItemType mutation. */
export type CreateItemTypePayload = {
  __typename?: 'CreateItemTypePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The created item_categories */
  itemType: Maybe<ItemType>;
};

/** Input for the createMediaItem mutation. */
export type CreateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  altText: InputMaybe<Scalars['String']['input']>;
  /** The userId to assign as the author of the mediaItem */
  authorId: InputMaybe<Scalars['ID']['input']>;
  /** The caption for the mediaItem */
  caption: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The comment status for the mediaItem */
  commentStatus: InputMaybe<Scalars['String']['input']>;
  /** The date of the mediaItem */
  date: InputMaybe<Scalars['String']['input']>;
  /** The date (in GMT zone) of the mediaItem */
  dateGmt: InputMaybe<Scalars['String']['input']>;
  /** Description of the mediaItem */
  description: InputMaybe<Scalars['String']['input']>;
  /** The file name of the mediaItem */
  filePath: InputMaybe<Scalars['String']['input']>;
  /** The file type of the mediaItem */
  fileType: InputMaybe<MimeTypeEnum>;
  /** The ID of the parent object */
  parentId: InputMaybe<Scalars['ID']['input']>;
  /** The ping status for the mediaItem */
  pingStatus: InputMaybe<Scalars['String']['input']>;
  /** The slug of the mediaItem */
  slug: InputMaybe<Scalars['String']['input']>;
  /** The status of the mediaItem */
  status: InputMaybe<MediaItemStatusEnum>;
  /** The title of the mediaItem */
  title: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the createMediaItem mutation. */
export type CreateMediaItemPayload = {
  __typename?: 'CreateMediaItemPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The MediaItem object mutation type. */
  mediaItem: Maybe<MediaItem>;
};

/** Input for the createPage mutation. */
export type CreatePageInput = {
  /** The userId to assign as the author of the object */
  authorId: InputMaybe<Scalars['ID']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The comment status for the object */
  commentStatus: InputMaybe<Scalars['String']['input']>;
  /** The content of the object */
  content: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date: InputMaybe<Scalars['String']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder: InputMaybe<Scalars['Int']['input']>;
  /** The ID of the parent object */
  parentId: InputMaybe<Scalars['ID']['input']>;
  /** The password used to protect the content of the object */
  password: InputMaybe<Scalars['String']['input']>;
  /** The slug of the object */
  slug: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the createPage mutation. */
export type CreatePagePayload = {
  __typename?: 'CreatePagePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The Post object mutation type. */
  page: Maybe<Page>;
};

/** Input for the createPostFormat mutation. */
export type CreatePostFormatInput = {
  /** The slug that the post_format will be an alias of */
  aliasOf: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The description of the post_format object */
  description: InputMaybe<Scalars['String']['input']>;
  /** The name of the post_format object to mutate */
  name: Scalars['String']['input'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the createPostFormat mutation. */
export type CreatePostFormatPayload = {
  __typename?: 'CreatePostFormatPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The created post_format */
  postFormat: Maybe<PostFormat>;
};

/** Input for the createPost mutation. */
export type CreatePostInput = {
  /** The userId to assign as the author of the object */
  authorId: InputMaybe<Scalars['ID']['input']>;
  /** Set connections between the post and categories */
  categories: InputMaybe<PostCategoriesInput>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The comment status for the object */
  commentStatus: InputMaybe<Scalars['String']['input']>;
  /** The content of the object */
  content: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date: InputMaybe<Scalars['String']['input']>;
  /** The excerpt of the object */
  excerpt: InputMaybe<Scalars['String']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder: InputMaybe<Scalars['Int']['input']>;
  /** The password used to protect the content of the object */
  password: InputMaybe<Scalars['String']['input']>;
  /** The ping status for the object */
  pingStatus: InputMaybe<Scalars['String']['input']>;
  /** URLs that have been pinged. */
  pinged: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Set connections between the post and postFormats */
  postFormats: InputMaybe<PostPostFormatsInput>;
  /** The slug of the object */
  slug: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status: InputMaybe<PostStatusEnum>;
  /** Set connections between the post and tags */
  tags: InputMaybe<PostTagsInput>;
  /** The title of the object */
  title: InputMaybe<Scalars['String']['input']>;
  /** URLs queued to be pinged. */
  toPing: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** The payload for the createPost mutation. */
export type CreatePostPayload = {
  __typename?: 'CreatePostPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The Post object mutation type. */
  post: Maybe<Post>;
};

/** Input for the createTag mutation. */
export type CreateTagInput = {
  /** The slug that the post_tag will be an alias of */
  aliasOf: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The description of the post_tag object */
  description: InputMaybe<Scalars['String']['input']>;
  /** The name of the post_tag object to mutate */
  name: Scalars['String']['input'];
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the createTag mutation. */
export type CreateTagPayload = {
  __typename?: 'CreateTagPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The created post_tag */
  tag: Maybe<Tag>;
};

/** Input for the createTeam mutation. */
export type CreateTeamInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date: InputMaybe<Scalars['String']['input']>;
  /** The excerpt of the object */
  excerpt: InputMaybe<Scalars['String']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder: InputMaybe<Scalars['Int']['input']>;
  /** The password used to protect the content of the object */
  password: InputMaybe<Scalars['String']['input']>;
  /** The slug of the object */
  slug: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the createTeam mutation. */
export type CreateTeamPayload = {
  __typename?: 'CreateTeamPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The Post object mutation type. */
  team: Maybe<Team>;
};

/** Input for the createUser mutation. */
export type CreateUserInput = {
  /** User's AOL IM account. */
  aim: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** A string containing content about the user. */
  description: InputMaybe<Scalars['String']['input']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName: InputMaybe<Scalars['String']['input']>;
  /** A string containing the user's email address. */
  email: InputMaybe<Scalars['String']['input']>;
  /** 	The user's first name. */
  firstName: InputMaybe<Scalars['String']['input']>;
  /** User's Jabber account. */
  jabber: InputMaybe<Scalars['String']['input']>;
  /** The user's last name. */
  lastName: InputMaybe<Scalars['String']['input']>;
  /** User's locale. */
  locale: InputMaybe<Scalars['String']['input']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename: InputMaybe<Scalars['String']['input']>;
  /** The user's nickname, defaults to the user's username. */
  nickname: InputMaybe<Scalars['String']['input']>;
  /** A string that contains the plain text password for the user. */
  password: InputMaybe<Scalars['String']['input']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered: InputMaybe<Scalars['String']['input']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing: InputMaybe<Scalars['String']['input']>;
  /** An array of roles to be assigned to the user. */
  roles: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A string that contains the user's username for logging in. */
  username: Scalars['String']['input'];
  /** A string containing the user's URL for the user's web site. */
  websiteUrl: InputMaybe<Scalars['String']['input']>;
  /** User's Yahoo IM account. */
  yim: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the createUser mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The User object mutation type. */
  user: Maybe<User>;
};

/** Object that can be identified with a Database ID */
export type DatabaseIdentifier = {
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
};

/** Date values */
export type DateInput = {
  /** Day of the month (from 1 to 31) */
  day: InputMaybe<Scalars['Int']['input']>;
  /** Month number (from 1 to 12) */
  month: InputMaybe<Scalars['Int']['input']>;
  /** 4 digit year (e.g. 2017) */
  year: InputMaybe<Scalars['Int']['input']>;
};

/** Filter the connection based on input */
export type DateQueryInput = {
  /** Nodes should be returned after this date */
  after: InputMaybe<DateInput>;
  /** Nodes should be returned before this date */
  before: InputMaybe<DateInput>;
  /** Column to query against */
  column: InputMaybe<PostObjectsConnectionDateColumnEnum>;
  /** For after/before, whether exact value should be matched or not */
  compare: InputMaybe<Scalars['String']['input']>;
  /** Day of the month (from 1 to 31) */
  day: InputMaybe<Scalars['Int']['input']>;
  /** Hour (from 0 to 23) */
  hour: InputMaybe<Scalars['Int']['input']>;
  /** For after/before, whether exact value should be matched or not */
  inclusive: InputMaybe<Scalars['Boolean']['input']>;
  /** Minute (from 0 to 59) */
  minute: InputMaybe<Scalars['Int']['input']>;
  /** Month number (from 1 to 12) */
  month: InputMaybe<Scalars['Int']['input']>;
  /** OR or AND, how the sub-arrays should be compared */
  relation: InputMaybe<RelationEnum>;
  /** Second (0 to 59) */
  second: InputMaybe<Scalars['Int']['input']>;
  /** Week of the year (from 0 to 53) */
  week: InputMaybe<Scalars['Int']['input']>;
  /** 4 digit year (e.g. 2017) */
  year: InputMaybe<Scalars['Int']['input']>;
};

/** The template assigned to the node */
export type DefaultTemplate = ContentTemplate & {
  __typename?: 'DefaultTemplate';
  /** The name of the template */
  templateName: Maybe<Scalars['String']['output']>;
};

/** Input for the deleteCategory mutation. */
export type DeleteCategoryInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The ID of the category to delete */
  id: Scalars['ID']['input'];
};

/** The payload for the deleteCategory mutation. */
export type DeleteCategoryPayload = {
  __typename?: 'DeleteCategoryPayload';
  /** The deleted term object */
  category: Maybe<Category>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The ID of the deleted object */
  deletedId: Maybe<Scalars['ID']['output']>;
};

/** Input for the deleteCollection mutation. */
export type DeleteCollectionInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete: InputMaybe<Scalars['Boolean']['input']>;
  /** The ID of the collection to delete */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock: InputMaybe<Scalars['Boolean']['input']>;
};

/** The payload for the deleteCollection mutation. */
export type DeleteCollectionPayload = {
  __typename?: 'DeleteCollectionPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The object before it was deleted */
  collection: Maybe<Collection>;
  /** The ID of the deleted object */
  deletedId: Maybe<Scalars['ID']['output']>;
};

/** Input for the deleteComment mutation. */
export type DeleteCommentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** Whether the comment should be force deleted instead of being moved to the trash */
  forceDelete: InputMaybe<Scalars['Boolean']['input']>;
  /** The deleted comment ID */
  id: Scalars['ID']['input'];
};

/** The payload for the deleteComment mutation. */
export type DeleteCommentPayload = {
  __typename?: 'DeleteCommentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The deleted comment object */
  comment: Maybe<Comment>;
  /** The deleted comment ID */
  deletedId: Maybe<Scalars['ID']['output']>;
};

/** Input for the deleteGraphqlDocumentGroup mutation. */
export type DeleteGraphqlDocumentGroupInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The ID of the graphqlDocumentGroup to delete */
  id: Scalars['ID']['input'];
};

/** The payload for the deleteGraphqlDocumentGroup mutation. */
export type DeleteGraphqlDocumentGroupPayload = {
  __typename?: 'DeleteGraphqlDocumentGroupPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The ID of the deleted object */
  deletedId: Maybe<Scalars['ID']['output']>;
  /** The deleted term object */
  graphqlDocumentGroup: Maybe<GraphqlDocumentGroup>;
};

/** Input for the deleteGraphqlDocument mutation. */
export type DeleteGraphqlDocumentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete: InputMaybe<Scalars['Boolean']['input']>;
  /** The ID of the graphqlDocument to delete */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock: InputMaybe<Scalars['Boolean']['input']>;
};

/** The payload for the deleteGraphqlDocument mutation. */
export type DeleteGraphqlDocumentPayload = {
  __typename?: 'DeleteGraphqlDocumentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The ID of the deleted object */
  deletedId: Maybe<Scalars['ID']['output']>;
  /** The object before it was deleted */
  graphqlDocument: Maybe<GraphqlDocument>;
};

/** Input for the deleteHero mutation. */
export type DeleteHeroInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete: InputMaybe<Scalars['Boolean']['input']>;
  /** The ID of the hero to delete */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock: InputMaybe<Scalars['Boolean']['input']>;
};

/** The payload for the deleteHero mutation. */
export type DeleteHeroPayload = {
  __typename?: 'DeleteHeroPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The ID of the deleted object */
  deletedId: Maybe<Scalars['ID']['output']>;
  /** The object before it was deleted */
  hero: Maybe<Hero>;
};

/** Input for the deleteItem mutation. */
export type DeleteItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete: InputMaybe<Scalars['Boolean']['input']>;
  /** The ID of the item to delete */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock: InputMaybe<Scalars['Boolean']['input']>;
};

/** The payload for the deleteItem mutation. */
export type DeleteItemPayload = {
  __typename?: 'DeleteItemPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The ID of the deleted object */
  deletedId: Maybe<Scalars['ID']['output']>;
  /** The object before it was deleted */
  item: Maybe<Item>;
};

/** Input for the deleteItemType mutation. */
export type DeleteItemTypeInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The ID of the itemType to delete */
  id: Scalars['ID']['input'];
};

/** The payload for the deleteItemType mutation. */
export type DeleteItemTypePayload = {
  __typename?: 'DeleteItemTypePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The ID of the deleted object */
  deletedId: Maybe<Scalars['ID']['output']>;
  /** The deleted term object */
  itemType: Maybe<ItemType>;
};

/** Input for the deleteMediaItem mutation. */
export type DeleteMediaItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** Whether the mediaItem should be force deleted instead of being moved to the trash */
  forceDelete: InputMaybe<Scalars['Boolean']['input']>;
  /** The ID of the mediaItem to delete */
  id: Scalars['ID']['input'];
};

/** The payload for the deleteMediaItem mutation. */
export type DeleteMediaItemPayload = {
  __typename?: 'DeleteMediaItemPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The ID of the deleted mediaItem */
  deletedId: Maybe<Scalars['ID']['output']>;
  /** The mediaItem before it was deleted */
  mediaItem: Maybe<MediaItem>;
};

/** Input for the deletePage mutation. */
export type DeletePageInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete: InputMaybe<Scalars['Boolean']['input']>;
  /** The ID of the page to delete */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock: InputMaybe<Scalars['Boolean']['input']>;
};

/** The payload for the deletePage mutation. */
export type DeletePagePayload = {
  __typename?: 'DeletePagePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The ID of the deleted object */
  deletedId: Maybe<Scalars['ID']['output']>;
  /** The object before it was deleted */
  page: Maybe<Page>;
};

/** Input for the deletePostFormat mutation. */
export type DeletePostFormatInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The ID of the postFormat to delete */
  id: Scalars['ID']['input'];
};

/** The payload for the deletePostFormat mutation. */
export type DeletePostFormatPayload = {
  __typename?: 'DeletePostFormatPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The ID of the deleted object */
  deletedId: Maybe<Scalars['ID']['output']>;
  /** The deleted term object */
  postFormat: Maybe<PostFormat>;
};

/** Input for the deletePost mutation. */
export type DeletePostInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete: InputMaybe<Scalars['Boolean']['input']>;
  /** The ID of the post to delete */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock: InputMaybe<Scalars['Boolean']['input']>;
};

/** The payload for the deletePost mutation. */
export type DeletePostPayload = {
  __typename?: 'DeletePostPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The ID of the deleted object */
  deletedId: Maybe<Scalars['ID']['output']>;
  /** The object before it was deleted */
  post: Maybe<Post>;
};

/** Input for the deleteTag mutation. */
export type DeleteTagInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The ID of the tag to delete */
  id: Scalars['ID']['input'];
};

/** The payload for the deleteTag mutation. */
export type DeleteTagPayload = {
  __typename?: 'DeleteTagPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The ID of the deleted object */
  deletedId: Maybe<Scalars['ID']['output']>;
  /** The deleted term object */
  tag: Maybe<Tag>;
};

/** Input for the deleteTeam mutation. */
export type DeleteTeamInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete: InputMaybe<Scalars['Boolean']['input']>;
  /** The ID of the team to delete */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock: InputMaybe<Scalars['Boolean']['input']>;
};

/** The payload for the deleteTeam mutation. */
export type DeleteTeamPayload = {
  __typename?: 'DeleteTeamPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The ID of the deleted object */
  deletedId: Maybe<Scalars['ID']['output']>;
  /** The object before it was deleted */
  team: Maybe<Team>;
};

/** Input for the deleteUser mutation. */
export type DeleteUserInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The ID of the user you want to delete */
  id: Scalars['ID']['input'];
  /** Reassign posts and links to new User ID. */
  reassignId: InputMaybe<Scalars['ID']['input']>;
};

/** The payload for the deleteUser mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The ID of the user that you just deleted */
  deletedId: Maybe<Scalars['ID']['output']>;
  /** The deleted user object */
  user: Maybe<User>;
};

/** The discussion setting type */
export type DiscussionSettings = {
  __typename?: 'DiscussionSettings';
  /** Allow people to submit comments on new posts. */
  defaultCommentStatus: Maybe<Scalars['String']['output']>;
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  defaultPingStatus: Maybe<Scalars['String']['output']>;
};

/** Input for the downvoteTeam mutation. */
export type DownvoteTeamInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The ID of the hero */
  heroId: InputMaybe<Scalars['Int']['input']>;
  /** The IP address of the voter */
  ipAddress: InputMaybe<Scalars['String']['input']>;
  /** The ID of the team */
  teamId: InputMaybe<Scalars['Int']['input']>;
  /** The ID of the user */
  userId: InputMaybe<Scalars['Int']['input']>;
};

/** The payload for the downvoteTeam mutation. */
export type DownvoteTeamPayload = {
  __typename?: 'DownvoteTeamPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The current vote status after the operation */
  currentVote: Maybe<Scalars['String']['output']>;
  /** True if the vote was successful */
  success: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the team */
  teamId: Maybe<Scalars['Int']['output']>;
};

/** Relational context between connected nodes */
export type Edge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected node */
  node: Node;
};

/** Asset enqueued by the CMS */
export type EnqueuedAsset = {
  /** The inline code to be run after the asset is loaded. */
  after: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * Deprecated
   * @deprecated Use `EnqueuedAsset.media` instead.
   */
  args: Maybe<Scalars['Boolean']['output']>;
  /** The inline code to be run before the asset is loaded. */
  before: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The HTML conditional comment for the enqueued asset. E.g. IE 6, lte IE 7, etc */
  conditional: Maybe<Scalars['String']['output']>;
  /** Dependencies needed to use this asset */
  dependencies: Maybe<Array<Maybe<EnqueuedAsset>>>;
  /**
   * Extra information needed for the script
   * @deprecated Use `EnqueuedScript.extraData` instead.
   */
  extra: Maybe<Scalars['String']['output']>;
  /** The handle of the enqueued asset */
  handle: Maybe<Scalars['String']['output']>;
  /** The ID of the enqueued asset */
  id: Scalars['ID']['output'];
  /** The source of the asset */
  src: Maybe<Scalars['String']['output']>;
  /** The version of the enqueued asset */
  version: Maybe<Scalars['String']['output']>;
};

/** Script enqueued by the CMS */
export type EnqueuedScript = EnqueuedAsset & Node & {
  __typename?: 'EnqueuedScript';
  /** The inline code to be run after the asset is loaded. */
  after: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * Deprecated
   * @deprecated Use `EnqueuedAsset.media` instead.
   */
  args: Maybe<Scalars['Boolean']['output']>;
  /** The inline code to be run before the asset is loaded. */
  before: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The HTML conditional comment for the enqueued asset. E.g. IE 6, lte IE 7, etc */
  conditional: Maybe<Scalars['String']['output']>;
  /** Dependencies needed to use this asset */
  dependencies: Maybe<Array<Maybe<EnqueuedScript>>>;
  /**
   * Extra information needed for the script
   * @deprecated Use `EnqueuedScript.extraData` instead.
   */
  extra: Maybe<Scalars['String']['output']>;
  /** Extra data supplied to the enqueued script */
  extraData: Maybe<Scalars['String']['output']>;
  /** The handle of the enqueued asset */
  handle: Maybe<Scalars['String']['output']>;
  /** The global ID of the enqueued script */
  id: Scalars['ID']['output'];
  /** The source of the asset */
  src: Maybe<Scalars['String']['output']>;
  /** The loading strategy to use on the script tag */
  strategy: Maybe<ScriptLoadingStrategyEnum>;
  /** The version of the enqueued script */
  version: Maybe<Scalars['String']['output']>;
};

/** Connection to EnqueuedScript Nodes */
export type EnqueuedScriptConnection = {
  /** A list of edges (relational context) between ContentNode and connected EnqueuedScript Nodes */
  edges: Array<EnqueuedScriptConnectionEdge>;
  /** A list of connected EnqueuedScript Nodes */
  nodes: Array<EnqueuedScript>;
  /** Information about pagination in a connection. */
  pageInfo: EnqueuedScriptConnectionPageInfo;
};

/** Edge between a Node and a connected EnqueuedScript */
export type EnqueuedScriptConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected EnqueuedScript Node */
  node: EnqueuedScript;
};

/** Page Info on the connected EnqueuedScriptConnectionEdge */
export type EnqueuedScriptConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Stylesheet enqueued by the CMS */
export type EnqueuedStylesheet = EnqueuedAsset & Node & {
  __typename?: 'EnqueuedStylesheet';
  /** The inline code to be run after the asset is loaded. */
  after: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * Deprecated
   * @deprecated Use `EnqueuedAsset.media` instead.
   */
  args: Maybe<Scalars['Boolean']['output']>;
  /** The inline code to be run before the asset is loaded. */
  before: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The HTML conditional comment for the enqueued asset. E.g. IE 6, lte IE 7, etc */
  conditional: Maybe<Scalars['String']['output']>;
  /** Dependencies needed to use this asset */
  dependencies: Maybe<Array<Maybe<EnqueuedStylesheet>>>;
  /**
   * Extra information needed for the script
   * @deprecated Use `EnqueuedScript.extraData` instead.
   */
  extra: Maybe<Scalars['String']['output']>;
  /** The handle of the enqueued asset */
  handle: Maybe<Scalars['String']['output']>;
  /** The global ID of the enqueued stylesheet */
  id: Scalars['ID']['output'];
  /** Whether the enqueued style is RTL or not */
  isRtl: Maybe<Scalars['Boolean']['output']>;
  /** The media attribute to use for the link */
  media: Maybe<Scalars['String']['output']>;
  /** The absolute path to the enqueued style. Set when the stylesheet is meant to load inline. */
  path: Maybe<Scalars['String']['output']>;
  /** The `rel` attribute to use for the link */
  rel: Maybe<Scalars['String']['output']>;
  /** The source of the asset */
  src: Maybe<Scalars['String']['output']>;
  /** Optional suffix, used in combination with RTL */
  suffix: Maybe<Scalars['String']['output']>;
  /** The title of the enqueued style. Used for preferred/alternate stylesheets. */
  title: Maybe<Scalars['String']['output']>;
  /** The version of the enqueued style */
  version: Maybe<Scalars['String']['output']>;
};

/** Connection to EnqueuedStylesheet Nodes */
export type EnqueuedStylesheetConnection = {
  /** A list of edges (relational context) between ContentNode and connected EnqueuedStylesheet Nodes */
  edges: Array<EnqueuedStylesheetConnectionEdge>;
  /** A list of connected EnqueuedStylesheet Nodes */
  nodes: Array<EnqueuedStylesheet>;
  /** Information about pagination in a connection. */
  pageInfo: EnqueuedStylesheetConnectionPageInfo;
};

/** Edge between a Node and a connected EnqueuedStylesheet */
export type EnqueuedStylesheetConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected EnqueuedStylesheet Node */
  node: EnqueuedStylesheet;
};

/** Page Info on the connected EnqueuedStylesheetConnectionEdge */
export type EnqueuedStylesheetConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** The &quot;EquipmentOptions&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type EquipmentOptions = AcfFieldGroup & AcfFieldGroupFields & EquipmentOptions_Fields & {
  __typename?: 'EquipmentOptions';
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;EquipmentOptions&quot; Field Group */
  lb5Option: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentOptions&quot; Field Group */
  lb5Value: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;EquipmentOptions&quot; Field Group */
  mainStats: Maybe<Array<Maybe<EquipmentOptionsMainStats>>>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentOptions&quot; Field Group */
  maxSubOptionLines: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;EquipmentOptions&quot; Field Group */
  subStats: Maybe<Array<Maybe<EquipmentOptionsSubStats>>>;
};

/** The &quot;EquipmentOptionsMainStats&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type EquipmentOptionsMainStats = AcfFieldGroup & AcfFieldGroupFields & EquipmentOptionsMainStats_Fields & {
  __typename?: 'EquipmentOptionsMainStats';
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;EquipmentOptionsMainStats&quot; Field Group */
  isRange: Maybe<Scalars['Boolean']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentOptionsMainStats&quot; Field Group */
  maxValue: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentOptionsMainStats&quot; Field Group */
  minValue: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;EquipmentOptionsMainStats&quot; Field Group */
  stat: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentOptionsMainStats&quot; Field Group */
  value: Maybe<Scalars['Float']['output']>;
};

/** Interface representing fields of the ACF &quot;EquipmentOptionsMainStats&quot; Field Group */
export type EquipmentOptionsMainStats_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;EquipmentOptionsMainStats&quot; Field Group */
  isRange: Maybe<Scalars['Boolean']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentOptionsMainStats&quot; Field Group */
  maxValue: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentOptionsMainStats&quot; Field Group */
  minValue: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;EquipmentOptionsMainStats&quot; Field Group */
  stat: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentOptionsMainStats&quot; Field Group */
  value: Maybe<Scalars['Float']['output']>;
};

/** The &quot;EquipmentOptionsSubStats&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type EquipmentOptionsSubStats = AcfFieldGroup & AcfFieldGroupFields & EquipmentOptionsSubStats_Fields & {
  __typename?: 'EquipmentOptionsSubStats';
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;EquipmentOptionsSubStats&quot; Field Group */
  isRange: Maybe<Scalars['Boolean']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentOptionsSubStats&quot; Field Group */
  maxValue: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentOptionsSubStats&quot; Field Group */
  minValue: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;EquipmentOptionsSubStats&quot; Field Group */
  stat: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentOptionsSubStats&quot; Field Group */
  value: Maybe<Scalars['Float']['output']>;
};

/** Interface representing fields of the ACF &quot;EquipmentOptionsSubStats&quot; Field Group */
export type EquipmentOptionsSubStats_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;EquipmentOptionsSubStats&quot; Field Group */
  isRange: Maybe<Scalars['Boolean']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentOptionsSubStats&quot; Field Group */
  maxValue: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentOptionsSubStats&quot; Field Group */
  minValue: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;EquipmentOptionsSubStats&quot; Field Group */
  stat: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentOptionsSubStats&quot; Field Group */
  value: Maybe<Scalars['Float']['output']>;
};

/** Interface representing fields of the ACF &quot;EquipmentOptions&quot; Field Group */
export type EquipmentOptions_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;EquipmentOptions&quot; Field Group */
  lb5Option: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentOptions&quot; Field Group */
  lb5Value: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;EquipmentOptions&quot; Field Group */
  mainStats: Maybe<Array<Maybe<EquipmentOptionsMainStats>>>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentOptions&quot; Field Group */
  maxSubOptionLines: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;EquipmentOptions&quot; Field Group */
  subStats: Maybe<Array<Maybe<EquipmentOptionsSubStats>>>;
};

/** The &quot;EquipmentSubOptions&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type EquipmentSubOptions = AcfFieldGroup & AcfFieldGroupFields & EquipmentSubOptions_Fields & {
  __typename?: 'EquipmentSubOptions';
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  maxLines: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subAtk: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subAtkOnKill: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subBasicTypeAtk: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subCritChance: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subDamageReduction: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subDarkTypeAtk: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subDef: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subDefFlat: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subEarthTypeAtk: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subFireTypeAtk: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subHealFlat: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subHealPercent: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subHp: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subHpOnKill: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subLightTypeAtk: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;checkbox&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subOptions: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subShieldOnKill: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subShieldOnStart: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subSkillDamage: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subSkillRegenOnKill: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subSkillRegenSpeed: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subWaterTypeAtk: Maybe<Scalars['Float']['output']>;
};

/** Interface representing fields of the ACF &quot;EquipmentSubOptions&quot; Field Group */
export type EquipmentSubOptions_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  maxLines: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subAtk: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subAtkOnKill: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subBasicTypeAtk: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subCritChance: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subDamageReduction: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subDarkTypeAtk: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subDef: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subDefFlat: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subEarthTypeAtk: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subFireTypeAtk: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subHealFlat: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subHealPercent: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subHp: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subHpOnKill: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subLightTypeAtk: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;checkbox&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subOptions: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subShieldOnKill: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subShieldOnStart: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subSkillDamage: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subSkillRegenOnKill: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subSkillRegenSpeed: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;EquipmentSubOptions&quot; Field Group */
  subWaterTypeAtk: Maybe<Scalars['Float']['output']>;
};

/** The general setting type */
export type GeneralSettings = {
  __typename?: 'GeneralSettings';
  /** A date format for all date strings. */
  dateFormat: Maybe<Scalars['String']['output']>;
  /** Site tagline. */
  description: Maybe<Scalars['String']['output']>;
  /** This address is used for admin purposes, like new user notification. */
  email: Maybe<Scalars['String']['output']>;
  /** WordPress locale code. */
  language: Maybe<Scalars['String']['output']>;
  /** A day number of the week that the week should start on. */
  startOfWeek: Maybe<Scalars['Int']['output']>;
  /** A time format for all time strings. */
  timeFormat: Maybe<Scalars['String']['output']>;
  /** A city in the same timezone as you. */
  timezone: Maybe<Scalars['String']['output']>;
  /** Site title. */
  title: Maybe<Scalars['String']['output']>;
  /** Site URL. */
  url: Maybe<Scalars['String']['output']>;
};

/** The graphqlDocument type */
export type GraphqlDocument = ContentNode & DatabaseIdentifier & Node & NodeWithContentEditor & NodeWithTemplate & NodeWithTitle & UniformResourceIdentifiable & WithAcfGuideFields & {
  __typename?: 'GraphqlDocument';
  /** Alias names for saved GraphQL query documents */
  alias: Maybe<Array<Scalars['String']['output']>>;
  /**
   * The ancestors of the content node.
   * @deprecated This content type is not hierarchical and typically will not have ancestors
   */
  ancestors: Maybe<GraphqlDocumentToGraphqlDocumentConnection>;
  /** The content of the post. */
  content: Maybe<Scalars['String']['output']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String']['output'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** Post publishing date. */
  date: Maybe<Scalars['String']['output']>;
  /** The publishing date set in GMT. */
  dateGmt: Maybe<Scalars['String']['output']>;
  /** Description for the saved GraphQL document */
  description: Maybe<Scalars['String']['output']>;
  /** The desired slug of the post */
  desiredSlug: Maybe<Scalars['String']['output']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure: Maybe<Scalars['String']['output']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** Allow, deny or default access grant for specific query */
  grant: Maybe<Scalars['String']['output']>;
  /** Connection between the GraphqlDocument type and the graphqlDocumentGroup type */
  graphqlDocumentGroups: Maybe<GraphqlDocumentToGraphqlDocumentGroupConnection>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  graphqlDocumentId: Scalars['Int']['output'];
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid: Maybe<Scalars['String']['output']>;
  /** Fields of the GuideFields ACF Field Group */
  guideFields: Maybe<GuideFields>;
  /** Whether the graphql_document object is password protected. */
  hasPassword: Maybe<Scalars['Boolean']['output']>;
  /** The globally unique identifier of the graphql_document object. */
  id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is a node in the preview state */
  isPreview: Maybe<Scalars['Boolean']['output']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** The user that most recently edited the node */
  lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link: Maybe<Scalars['String']['output']>;
  /** HTTP Cache-Control max-age directive for a saved GraphQL document */
  maxAgeHeader: Maybe<Scalars['Int']['output']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified: Maybe<Scalars['String']['output']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt: Maybe<Scalars['String']['output']>;
  /**
   * The parent of the content node.
   * @deprecated This content type is not hierarchical and typically will not have a parent
   */
  parent: Maybe<GraphqlDocumentToParentConnectionEdge>;
  /** The password for the graphql_document object. */
  password: Maybe<Scalars['String']['output']>;
  /**
   * Connection between the GraphqlDocument type and the graphqlDocument type
   * @deprecated The &quot;GraphqlDocument&quot; Type is not publicly queryable and does not support previews. This field will be removed in the future.
   */
  preview: Maybe<GraphqlDocumentToPreviewConnectionEdge>;
  /** The database id of the preview node */
  previewRevisionDatabaseId: Maybe<Scalars['Int']['output']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId: Maybe<Scalars['ID']['output']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug: Maybe<Scalars['String']['output']>;
  /** The current status of the object */
  status: Maybe<Scalars['String']['output']>;
  /** The template assigned to the node */
  template: Maybe<ContentTemplate>;
  /** Connection between the GraphqlDocument type and the TermNode type */
  terms: Maybe<GraphqlDocumentToTermNodeConnection>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title: Maybe<Scalars['String']['output']>;
  /** The unique resource identifier path */
  uri: Maybe<Scalars['String']['output']>;
};


/** The graphqlDocument type */
export type GraphqlDocumentAncestorsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The graphqlDocument type */
export type GraphqlDocumentContentArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The graphqlDocument type */
export type GraphqlDocumentEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The graphqlDocument type */
export type GraphqlDocumentEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The graphqlDocument type */
export type GraphqlDocumentGraphqlDocumentGroupsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<GraphqlDocumentToGraphqlDocumentGroupConnectionWhereArgs>;
};


/** The graphqlDocument type */
export type GraphqlDocumentTermsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<GraphqlDocumentToTermNodeConnectionWhereArgs>;
};


/** The graphqlDocument type */
export type GraphqlDocumentTitleArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Connection to graphqlDocument Nodes */
export type GraphqlDocumentConnection = {
  /** A list of edges (relational context) between RootQuery and connected graphqlDocument Nodes */
  edges: Array<GraphqlDocumentConnectionEdge>;
  /** A list of connected graphqlDocument Nodes */
  nodes: Array<GraphqlDocument>;
  /** Information about pagination in a connection. */
  pageInfo: GraphqlDocumentConnectionPageInfo;
};

/** Edge between a Node and a connected graphqlDocument */
export type GraphqlDocumentConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected graphqlDocument Node */
  node: GraphqlDocument;
};

/** Page Info on the connected GraphqlDocumentConnectionEdge */
export type GraphqlDocumentConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Set relationships between the graphqlDocument to graphqlDocumentGroups */
export type GraphqlDocumentGraphqlDocumentGroupsInput = {
  /** If true, this will append the graphqlDocumentGroup to existing related graphqlDocumentGroups. If false, this will replace existing relationships. Default true. */
  append: InputMaybe<Scalars['Boolean']['input']>;
  /** The input list of items to set. */
  nodes: InputMaybe<Array<InputMaybe<GraphqlDocumentGraphqlDocumentGroupsNodeInput>>>;
};

/** List of graphqlDocumentGroups to connect the graphqlDocument to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type GraphqlDocumentGraphqlDocumentGroupsNodeInput = {
  /** The description of the graphqlDocumentGroup. This field is used to set a description of the graphqlDocumentGroup if a new one is created during the mutation. */
  description: InputMaybe<Scalars['String']['input']>;
  /** The ID of the graphqlDocumentGroup. If present, this will be used to connect to the graphqlDocument. If no existing graphqlDocumentGroup exists with this ID, no connection will be made. */
  id: InputMaybe<Scalars['ID']['input']>;
  /** The name of the graphqlDocumentGroup. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name: InputMaybe<Scalars['String']['input']>;
  /** The slug of the graphqlDocumentGroup. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug: InputMaybe<Scalars['String']['input']>;
};

/** The graphqlDocumentGroup type */
export type GraphqlDocumentGroup = DatabaseIdentifier & Node & TermNode & UniformResourceIdentifiable & {
  __typename?: 'GraphqlDocumentGroup';
  /** Connection between the GraphqlDocumentGroup type and the ContentNode type */
  contentNodes: Maybe<GraphqlDocumentGroupToContentNodeConnection>;
  /** The number of objects connected to the object */
  count: Maybe<Scalars['Int']['output']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** The description of the object */
  description: Maybe<Scalars['String']['output']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  graphqlDocumentGroupId: Maybe<Scalars['Int']['output']>;
  /** Connection between the GraphqlDocumentGroup type and the graphqlDocument type */
  graphqlDocuments: Maybe<GraphqlDocumentGroupToGraphqlDocumentConnection>;
  /** The globally unique ID for the object */
  id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is restricted from the current viewer */
  isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** The link to the term */
  link: Maybe<Scalars['String']['output']>;
  /** The human friendly name of the object. */
  name: Maybe<Scalars['String']['output']>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug: Maybe<Scalars['String']['output']>;
  /** Connection between the GraphqlDocumentGroup type and the Taxonomy type */
  taxonomy: Maybe<GraphqlDocumentGroupToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName: Maybe<Scalars['String']['output']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId: Maybe<Scalars['Int']['output']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId: Maybe<Scalars['Int']['output']>;
  /** The unique resource identifier path */
  uri: Maybe<Scalars['String']['output']>;
};


/** The graphqlDocumentGroup type */
export type GraphqlDocumentGroupContentNodesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<GraphqlDocumentGroupToContentNodeConnectionWhereArgs>;
};


/** The graphqlDocumentGroup type */
export type GraphqlDocumentGroupEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The graphqlDocumentGroup type */
export type GraphqlDocumentGroupEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The graphqlDocumentGroup type */
export type GraphqlDocumentGroupGraphqlDocumentsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<GraphqlDocumentGroupToGraphqlDocumentConnectionWhereArgs>;
};

/** Connection to graphqlDocumentGroup Nodes */
export type GraphqlDocumentGroupConnection = {
  /** A list of edges (relational context) between RootQuery and connected graphqlDocumentGroup Nodes */
  edges: Array<GraphqlDocumentGroupConnectionEdge>;
  /** A list of connected graphqlDocumentGroup Nodes */
  nodes: Array<GraphqlDocumentGroup>;
  /** Information about pagination in a connection. */
  pageInfo: GraphqlDocumentGroupConnectionPageInfo;
};

/** Edge between a Node and a connected graphqlDocumentGroup */
export type GraphqlDocumentGroupConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected graphqlDocumentGroup Node */
  node: GraphqlDocumentGroup;
};

/** Page Info on the connected GraphqlDocumentGroupConnectionEdge */
export type GraphqlDocumentGroupConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum GraphqlDocumentGroupIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the GraphqlDocumentGroup type and the ContentNode type */
export type GraphqlDocumentGroupToContentNodeConnection = Connection & ContentNodeConnection & {
  __typename?: 'GraphqlDocumentGroupToContentNodeConnection';
  /** Edges for the GraphqlDocumentGroupToContentNodeConnection connection */
  edges: Array<GraphqlDocumentGroupToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: GraphqlDocumentGroupToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type GraphqlDocumentGroupToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'GraphqlDocumentGroupToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;GraphqlDocumentGroupToContentNodeConnection&quot; */
export type GraphqlDocumentGroupToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'GraphqlDocumentGroupToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the GraphqlDocumentGroupToContentNodeConnection connection */
export type GraphqlDocumentGroupToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes: InputMaybe<Array<InputMaybe<ContentTypesOfGraphqlDocumentGroupEnum>>>;
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the GraphqlDocumentGroup type and the graphqlDocument type */
export type GraphqlDocumentGroupToGraphqlDocumentConnection = Connection & GraphqlDocumentConnection & {
  __typename?: 'GraphqlDocumentGroupToGraphqlDocumentConnection';
  /** Edges for the GraphqlDocumentGroupToGraphqlDocumentConnection connection */
  edges: Array<GraphqlDocumentGroupToGraphqlDocumentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<GraphqlDocument>;
  /** Information about pagination in a connection. */
  pageInfo: GraphqlDocumentGroupToGraphqlDocumentConnectionPageInfo;
};

/** An edge in a connection */
export type GraphqlDocumentGroupToGraphqlDocumentConnectionEdge = Edge & GraphqlDocumentConnectionEdge & {
  __typename?: 'GraphqlDocumentGroupToGraphqlDocumentConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: GraphqlDocument;
};

/** Page Info on the &quot;GraphqlDocumentGroupToGraphqlDocumentConnection&quot; */
export type GraphqlDocumentGroupToGraphqlDocumentConnectionPageInfo = GraphqlDocumentConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'GraphqlDocumentGroupToGraphqlDocumentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the GraphqlDocumentGroupToGraphqlDocumentConnection connection */
export type GraphqlDocumentGroupToGraphqlDocumentConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the GraphqlDocumentGroup type and the Taxonomy type */
export type GraphqlDocumentGroupToTaxonomyConnectionEdge = Edge & OneToOneConnection & TaxonomyConnectionEdge & {
  __typename?: 'GraphqlDocumentGroupToTaxonomyConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  node: Taxonomy;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum GraphqlDocumentIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Connection between the GraphqlDocument type and the graphqlDocument type */
export type GraphqlDocumentToGraphqlDocumentConnection = Connection & GraphqlDocumentConnection & {
  __typename?: 'GraphqlDocumentToGraphqlDocumentConnection';
  /** Edges for the GraphqlDocumentToGraphqlDocumentConnection connection */
  edges: Array<GraphqlDocumentToGraphqlDocumentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<GraphqlDocument>;
  /** Information about pagination in a connection. */
  pageInfo: GraphqlDocumentToGraphqlDocumentConnectionPageInfo;
};

/** An edge in a connection */
export type GraphqlDocumentToGraphqlDocumentConnectionEdge = Edge & GraphqlDocumentConnectionEdge & {
  __typename?: 'GraphqlDocumentToGraphqlDocumentConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated This content type is not hierarchical and typically will not have ancestors
   */
  cursor: Maybe<Scalars['String']['output']>;
  /**
   * The item at the end of the edge
   * @deprecated This content type is not hierarchical and typically will not have ancestors
   */
  node: GraphqlDocument;
};

/** Page Info on the &quot;GraphqlDocumentToGraphqlDocumentConnection&quot; */
export type GraphqlDocumentToGraphqlDocumentConnectionPageInfo = GraphqlDocumentConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'GraphqlDocumentToGraphqlDocumentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Connection between the GraphqlDocument type and the graphqlDocumentGroup type */
export type GraphqlDocumentToGraphqlDocumentGroupConnection = Connection & GraphqlDocumentGroupConnection & {
  __typename?: 'GraphqlDocumentToGraphqlDocumentGroupConnection';
  /** Edges for the GraphqlDocumentToGraphqlDocumentGroupConnection connection */
  edges: Array<GraphqlDocumentToGraphqlDocumentGroupConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<GraphqlDocumentGroup>;
  /** Information about pagination in a connection. */
  pageInfo: GraphqlDocumentToGraphqlDocumentGroupConnectionPageInfo;
};

/** An edge in a connection */
export type GraphqlDocumentToGraphqlDocumentGroupConnectionEdge = Edge & GraphqlDocumentGroupConnectionEdge & {
  __typename?: 'GraphqlDocumentToGraphqlDocumentGroupConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: GraphqlDocumentGroup;
};

/** Page Info on the &quot;GraphqlDocumentToGraphqlDocumentGroupConnection&quot; */
export type GraphqlDocumentToGraphqlDocumentGroupConnectionPageInfo = GraphqlDocumentGroupConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'GraphqlDocumentToGraphqlDocumentGroupConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the GraphqlDocumentToGraphqlDocumentGroupConnection connection */
export type GraphqlDocumentToGraphqlDocumentGroupConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache: InputMaybe<Scalars['Boolean']['input']>;
};

/** Connection between the GraphqlDocument type and the graphqlDocument type */
export type GraphqlDocumentToParentConnectionEdge = Edge & GraphqlDocumentConnectionEdge & OneToOneConnection & {
  __typename?: 'GraphqlDocumentToParentConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /**
   * The node of the connection, without the edges
   * @deprecated This content type is not hierarchical and typically will not have a parent
   */
  node: GraphqlDocument;
};

/** Connection between the GraphqlDocument type and the graphqlDocument type */
export type GraphqlDocumentToPreviewConnectionEdge = Edge & GraphqlDocumentConnectionEdge & OneToOneConnection & {
  __typename?: 'GraphqlDocumentToPreviewConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /**
   * The node of the connection, without the edges
   * @deprecated The &quot;GraphqlDocument&quot; Type is not publicly queryable and does not support previews. This field will be removed in the future.
   */
  node: GraphqlDocument;
};

/** Connection between the GraphqlDocument type and the TermNode type */
export type GraphqlDocumentToTermNodeConnection = Connection & TermNodeConnection & {
  __typename?: 'GraphqlDocumentToTermNodeConnection';
  /** Edges for the GraphqlDocumentToTermNodeConnection connection */
  edges: Array<GraphqlDocumentToTermNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<TermNode>;
  /** Information about pagination in a connection. */
  pageInfo: GraphqlDocumentToTermNodeConnectionPageInfo;
};

/** An edge in a connection */
export type GraphqlDocumentToTermNodeConnectionEdge = Edge & TermNodeConnectionEdge & {
  __typename?: 'GraphqlDocumentToTermNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: TermNode;
};

/** Page Info on the &quot;GraphqlDocumentToTermNodeConnection&quot; */
export type GraphqlDocumentToTermNodeConnectionPageInfo = PageInfo & TermNodeConnectionPageInfo & WpPageInfo & {
  __typename?: 'GraphqlDocumentToTermNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the GraphqlDocumentToTermNodeConnection connection */
export type GraphqlDocumentToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The Taxonomy to filter terms by */
  taxonomies: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache: InputMaybe<Scalars['Boolean']['input']>;
};

/** The &quot;GuideFields&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type GuideFields = AcfFieldGroup & AcfFieldGroupFields & GuideFields_Fields & {
  __typename?: 'GuideFields';
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;GuideFields&quot; Field Group */
  guideBanner: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;GuideFields&quot; Field Group */
  guideNumber: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;radio&quot; Field Type added to the schema as part of the &quot;GuideFields&quot; Field Group */
  guideType: Maybe<Scalars['String']['output']>;
};

/** Interface representing fields of the ACF &quot;GuideFields&quot; Field Group */
export type GuideFields_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;GuideFields&quot; Field Group */
  guideBanner: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;GuideFields&quot; Field Group */
  guideNumber: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;radio&quot; Field Type added to the schema as part of the &quot;GuideFields&quot; Field Group */
  guideType: Maybe<Scalars['String']['output']>;
};

/** The hero type */
export type Hero = ContentNode & DatabaseIdentifier & MenuItemLinkable & Node & NodeWithComments & NodeWithExcerpt & NodeWithFeaturedImage & NodeWithRevisions & NodeWithTemplate & NodeWithTitle & Previewable & UniformResourceIdentifiable & WithAcfGuideFields & WithAcfHeroInformation & {
  __typename?: 'Hero';
  /**
   * The ancestors of the content node.
   * @deprecated This content type is not hierarchical and typically will not have ancestors
   */
  ancestors: Maybe<HeroToHeroConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount: Maybe<Scalars['Int']['output']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus: Maybe<Scalars['String']['output']>;
  /** Connection between the Hero type and the Comment type */
  comments: Maybe<HeroToCommentConnection>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String']['output'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** Post publishing date. */
  date: Maybe<Scalars['String']['output']>;
  /** The publishing date set in GMT. */
  dateGmt: Maybe<Scalars['String']['output']>;
  /** The desired slug of the post */
  desiredSlug: Maybe<Scalars['String']['output']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure: Maybe<Scalars['String']['output']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The excerpt of the post. */
  excerpt: Maybe<Scalars['String']['output']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId: Maybe<Scalars['Int']['output']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId: Maybe<Scalars['ID']['output']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid: Maybe<Scalars['String']['output']>;
  /** Fields of the GuideFields ACF Field Group */
  guideFields: Maybe<GuideFields>;
  /** Whether the heroes object is password protected. */
  hasPassword: Maybe<Scalars['Boolean']['output']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  heroId: Scalars['Int']['output'];
  /** Fields of the HeroInformation ACF Field Group */
  heroInformation: Maybe<HeroInformation>;
  /** The globally unique identifier of the heroes object. */
  id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is a node in the preview state */
  isPreview: Maybe<Scalars['Boolean']['output']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** True if the node is a revision of another node */
  isRevision: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** The user that most recently edited the node */
  lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link: Maybe<Scalars['String']['output']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified: Maybe<Scalars['String']['output']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt: Maybe<Scalars['String']['output']>;
  /**
   * The parent of the content node.
   * @deprecated This content type is not hierarchical and typically will not have a parent
   */
  parent: Maybe<HeroToParentConnectionEdge>;
  /** The password for the heroes object. */
  password: Maybe<Scalars['String']['output']>;
  /** Connection between the Hero type and the hero type */
  preview: Maybe<HeroToPreviewConnectionEdge>;
  /** The database id of the preview node */
  previewRevisionDatabaseId: Maybe<Scalars['Int']['output']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId: Maybe<Scalars['ID']['output']>;
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  revisionOf: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
  /** Connection between the Hero type and the hero type */
  revisions: Maybe<HeroToRevisionConnection>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug: Maybe<Scalars['String']['output']>;
  /** The current status of the object */
  status: Maybe<Scalars['String']['output']>;
  /** The template assigned to the node */
  template: Maybe<ContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title: Maybe<Scalars['String']['output']>;
  /** The unique resource identifier path */
  uri: Maybe<Scalars['String']['output']>;
};


/** The hero type */
export type HeroAncestorsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The hero type */
export type HeroCommentsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<HeroToCommentConnectionWhereArgs>;
};


/** The hero type */
export type HeroEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The hero type */
export type HeroEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The hero type */
export type HeroExcerptArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The hero type */
export type HeroRevisionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<HeroToRevisionConnectionWhereArgs>;
};


/** The hero type */
export type HeroTitleArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};

/** The &quot;HeroBanner&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroBanner = AcfFieldGroup & AcfFieldGroupFields & HeroBanner_Fields & {
  __typename?: 'HeroBanner';
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroBanner&quot; Field Group */
  featuredHeroes: Maybe<Array<Maybe<HeroBannerFeaturedHeroes>>>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroBanner&quot; Field Group */
  oneStarRate: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroBanner&quot; Field Group */
  threeStarRate: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroBanner&quot; Field Group */
  twoStarRate: Maybe<Scalars['Float']['output']>;
};

/** The &quot;HeroBannerFeaturedHeroes&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroBannerFeaturedHeroes = AcfFieldGroup & AcfFieldGroupFields & HeroBannerFeaturedHeroes_Fields & {
  __typename?: 'HeroBannerFeaturedHeroes';
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;HeroBannerFeaturedHeroes&quot; Field Group */
  featuredHero: Maybe<AcfContentNodeConnection>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroBannerFeaturedHeroes&quot; Field Group */
  rate: Maybe<Scalars['Float']['output']>;
};


/** The &quot;HeroBannerFeaturedHeroes&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroBannerFeaturedHeroesFeaturedHeroArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** Interface representing fields of the ACF &quot;HeroBannerFeaturedHeroes&quot; Field Group */
export type HeroBannerFeaturedHeroes_Fields = {
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;HeroBannerFeaturedHeroes&quot; Field Group */
  featuredHero: Maybe<AcfContentNodeConnection>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroBannerFeaturedHeroes&quot; Field Group */
  rate: Maybe<Scalars['Float']['output']>;
};


/** Interface representing fields of the ACF &quot;HeroBannerFeaturedHeroes&quot; Field Group */
export type HeroBannerFeaturedHeroes_FieldsFeaturedHeroArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** Interface representing fields of the ACF &quot;HeroBanner&quot; Field Group */
export type HeroBanner_Fields = {
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroBanner&quot; Field Group */
  featuredHeroes: Maybe<Array<Maybe<HeroBannerFeaturedHeroes>>>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroBanner&quot; Field Group */
  oneStarRate: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroBanner&quot; Field Group */
  threeStarRate: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroBanner&quot; Field Group */
  twoStarRate: Maybe<Scalars['Float']['output']>;
};

/** The &quot;HeroBlock&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroBlock = AcfFieldGroup & AcfFieldGroupFields & HeroBlock_Fields & {
  __typename?: 'HeroBlock';
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;post_object&quot; Field Type added to the schema as part of the &quot;HeroBlock&quot; Field Group */
  hero: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;wysiwyg&quot; Field Type added to the schema as part of the &quot;HeroBlock&quot; Field Group */
  text: Maybe<Scalars['String']['output']>;
};


/** The &quot;HeroBlock&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroBlockHeroArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** Interface representing fields of the ACF &quot;HeroBlock&quot; Field Group */
export type HeroBlock_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;post_object&quot; Field Type added to the schema as part of the &quot;HeroBlock&quot; Field Group */
  hero: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;wysiwyg&quot; Field Type added to the schema as part of the &quot;HeroBlock&quot; Field Group */
  text: Maybe<Scalars['String']['output']>;
};


/** Interface representing fields of the ACF &quot;HeroBlock&quot; Field Group */
export type HeroBlock_FieldsHeroArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** Connection to hero Nodes */
export type HeroConnection = {
  /** A list of edges (relational context) between RootQuery and connected hero Nodes */
  edges: Array<HeroConnectionEdge>;
  /** A list of connected hero Nodes */
  nodes: Array<Hero>;
  /** Information about pagination in a connection. */
  pageInfo: HeroConnectionPageInfo;
};

/** Edge between a Node and a connected hero */
export type HeroConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected hero Node */
  node: Hero;
};

/** Page Info on the connected HeroConnectionEdge */
export type HeroConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum HeroIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** The &quot;HeroInformation&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformation = AcfFieldGroup & AcfFieldGroupFields & HeroInformation_Fields & {
  __typename?: 'HeroInformation';
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  abilityFields: Maybe<HeroInformationAbilityFields>;
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  analysisFields: Maybe<HeroInformationAnalysisFields>;
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  ascentAbilities: Maybe<HeroInformationAscentAbilities>;
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  ascentExAbilities: Maybe<HeroInformationAscentExAbilities>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  background: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  bioFields: Maybe<HeroInformationBioFields>;
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  bioFields2: Maybe<HeroInformationBioFields2>;
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  buildGuideFields: Maybe<HeroInformationBuildGuideFields>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  costumes: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  evaluationFields: Maybe<HeroInformationEvaluationFields>;
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  evolutionFields: Maybe<HeroInformationEvolutionFields>;
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  evolutionFields2: Maybe<HeroInformationEvolutionFields2>;
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  exAbilities: Maybe<HeroInformationExAbilities>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  illustrations: Maybe<Array<Maybe<HeroInformationIllustrations>>>;
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  mlbAwakeningFields: Maybe<HeroInformationMlbAwakeningFields>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  portrait: Maybe<Array<Maybe<HeroInformationPortrait>>>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  portrait2: Maybe<Array<Maybe<HeroInformationPortrait2>>>;
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  statFields: Maybe<HeroInformationStatFields>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  statPriorities: Maybe<Array<Maybe<HeroInformationStatPriorities>>>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  synergies: Maybe<Array<Maybe<HeroInformationSynergies>>>;
  /** Field of the &quot;image_aspect_ratio_crop&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  thumbnail: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;checkbox&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  variations: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** The &quot;HeroInformation&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationCostumesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** The &quot;HeroInformationAbilityFields&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationAbilityFields = AcfFieldGroup & AcfFieldGroupFields & HeroInformationAbilityFields_Fields & {
  __typename?: 'HeroInformationAbilityFields';
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationAbilityFields&quot; Field Group */
  chainSkillDescription: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationAbilityFields&quot; Field Group */
  chainSkillName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;HeroInformationAbilityFields&quot; Field Group */
  chainStateResult: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;HeroInformationAbilityFields&quot; Field Group */
  chainStateTrigger: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationAbilityFields&quot; Field Group */
  normalAtkDescription: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationAbilityFields&quot; Field Group */
  normalAtkName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroInformationAbilityFields&quot; Field Group */
  partyBuff: Maybe<Array<Maybe<HeroInformationAbilityFieldsPartyBuff>>>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationAbilityFields&quot; Field Group */
  specialAbilityDescription: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationAbilityFields&quot; Field Group */
  specialAbilityName: Maybe<Scalars['String']['output']>;
};

/** The &quot;HeroInformationAbilityFieldsPartyBuff&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationAbilityFieldsPartyBuff = AcfFieldGroup & AcfFieldGroupFields & HeroInformationAbilityFieldsPartyBuff_Fields & {
  __typename?: 'HeroInformationAbilityFieldsPartyBuff';
  /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;HeroInformationAbilityFieldsPartyBuff&quot; Field Group */
  affectsParty: Maybe<Scalars['Boolean']['output']>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;HeroInformationAbilityFieldsPartyBuff&quot; Field Group */
  stat: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationAbilityFieldsPartyBuff&quot; Field Group */
  value: Maybe<Scalars['Float']['output']>;
};

/** Interface representing fields of the ACF &quot;HeroInformationAbilityFieldsPartyBuff&quot; Field Group */
export type HeroInformationAbilityFieldsPartyBuff_Fields = {
  /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;HeroInformationAbilityFieldsPartyBuff&quot; Field Group */
  affectsParty: Maybe<Scalars['Boolean']['output']>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;HeroInformationAbilityFieldsPartyBuff&quot; Field Group */
  stat: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationAbilityFieldsPartyBuff&quot; Field Group */
  value: Maybe<Scalars['Float']['output']>;
};

/** Interface representing fields of the ACF &quot;HeroInformationAbilityFields&quot; Field Group */
export type HeroInformationAbilityFields_Fields = {
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationAbilityFields&quot; Field Group */
  chainSkillDescription: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationAbilityFields&quot; Field Group */
  chainSkillName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;HeroInformationAbilityFields&quot; Field Group */
  chainStateResult: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;HeroInformationAbilityFields&quot; Field Group */
  chainStateTrigger: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationAbilityFields&quot; Field Group */
  normalAtkDescription: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationAbilityFields&quot; Field Group */
  normalAtkName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroInformationAbilityFields&quot; Field Group */
  partyBuff: Maybe<Array<Maybe<HeroInformationAbilityFieldsPartyBuff>>>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationAbilityFields&quot; Field Group */
  specialAbilityDescription: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationAbilityFields&quot; Field Group */
  specialAbilityName: Maybe<Scalars['String']['output']>;
};

/** The &quot;HeroInformationAnalysisFields&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationAnalysisFields = AcfFieldGroup & AcfFieldGroupFields & HeroInformationAnalysisFields_Fields & {
  __typename?: 'HeroInformationAnalysisFields';
  /** Field of the &quot;wysiwyg&quot; Field Type added to the schema as part of the &quot;HeroInformationAnalysisFields&quot; Field Group */
  arenaAnalysis: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;wysiwyg&quot; Field Type added to the schema as part of the &quot;HeroInformationAnalysisFields&quot; Field Group */
  colosseumAnalysis: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;wysiwyg&quot; Field Type added to the schema as part of the &quot;HeroInformationAnalysisFields&quot; Field Group */
  detailedReview: Maybe<Scalars['String']['output']>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
};

/** Interface representing fields of the ACF &quot;HeroInformationAnalysisFields&quot; Field Group */
export type HeroInformationAnalysisFields_Fields = {
  /** Field of the &quot;wysiwyg&quot; Field Type added to the schema as part of the &quot;HeroInformationAnalysisFields&quot; Field Group */
  arenaAnalysis: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;wysiwyg&quot; Field Type added to the schema as part of the &quot;HeroInformationAnalysisFields&quot; Field Group */
  colosseumAnalysis: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;wysiwyg&quot; Field Type added to the schema as part of the &quot;HeroInformationAnalysisFields&quot; Field Group */
  detailedReview: Maybe<Scalars['String']['output']>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
};

/** The &quot;HeroInformationAscentAbilities&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationAscentAbilities = AcfFieldGroup & AcfFieldGroupFields & HeroInformationAscentAbilities_Fields & {
  __typename?: 'HeroInformationAscentAbilities';
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentAbilities&quot; Field Group */
  chainSkillDescription: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentAbilities&quot; Field Group */
  chainSkillName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentAbilities&quot; Field Group */
  chainStateResult: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentAbilities&quot; Field Group */
  chainStateTrigger: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentAbilities&quot; Field Group */
  normalAtkDescription: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentAbilities&quot; Field Group */
  normalAtkName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentAbilities&quot; Field Group */
  partyBuff: Maybe<Array<Maybe<HeroInformationAscentAbilitiesPartyBuff>>>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentAbilities&quot; Field Group */
  passives: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentAbilities&quot; Field Group */
  specialAbilityDescription: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentAbilities&quot; Field Group */
  specialAbilityName: Maybe<Scalars['String']['output']>;
};

/** The &quot;HeroInformationAscentAbilitiesPartyBuff&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationAscentAbilitiesPartyBuff = AcfFieldGroup & AcfFieldGroupFields & HeroInformationAscentAbilitiesPartyBuff_Fields & {
  __typename?: 'HeroInformationAscentAbilitiesPartyBuff';
  /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentAbilitiesPartyBuff&quot; Field Group */
  affectsParty: Maybe<Scalars['Boolean']['output']>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentAbilitiesPartyBuff&quot; Field Group */
  stat: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentAbilitiesPartyBuff&quot; Field Group */
  value: Maybe<Scalars['Float']['output']>;
};

/** Interface representing fields of the ACF &quot;HeroInformationAscentAbilitiesPartyBuff&quot; Field Group */
export type HeroInformationAscentAbilitiesPartyBuff_Fields = {
  /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentAbilitiesPartyBuff&quot; Field Group */
  affectsParty: Maybe<Scalars['Boolean']['output']>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentAbilitiesPartyBuff&quot; Field Group */
  stat: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentAbilitiesPartyBuff&quot; Field Group */
  value: Maybe<Scalars['Float']['output']>;
};

/** Interface representing fields of the ACF &quot;HeroInformationAscentAbilities&quot; Field Group */
export type HeroInformationAscentAbilities_Fields = {
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentAbilities&quot; Field Group */
  chainSkillDescription: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentAbilities&quot; Field Group */
  chainSkillName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentAbilities&quot; Field Group */
  chainStateResult: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentAbilities&quot; Field Group */
  chainStateTrigger: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentAbilities&quot; Field Group */
  normalAtkDescription: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentAbilities&quot; Field Group */
  normalAtkName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentAbilities&quot; Field Group */
  partyBuff: Maybe<Array<Maybe<HeroInformationAscentAbilitiesPartyBuff>>>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentAbilities&quot; Field Group */
  passives: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentAbilities&quot; Field Group */
  specialAbilityDescription: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentAbilities&quot; Field Group */
  specialAbilityName: Maybe<Scalars['String']['output']>;
};

/** The &quot;HeroInformationAscentExAbilities&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationAscentExAbilities = AcfFieldGroup & AcfFieldGroupFields & HeroInformationAscentExAbilities_Fields & {
  __typename?: 'HeroInformationAscentExAbilities';
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentExAbilities&quot; Field Group */
  chainSkillDescription: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentExAbilities&quot; Field Group */
  chainSkillName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentExAbilities&quot; Field Group */
  chainStateResult: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentExAbilities&quot; Field Group */
  chainStateTrigger: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentExAbilities&quot; Field Group */
  normalAtkDescription: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentExAbilities&quot; Field Group */
  normalAtkName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentExAbilities&quot; Field Group */
  partyBuff: Maybe<Array<Maybe<HeroInformationAscentExAbilitiesPartyBuff>>>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentExAbilities&quot; Field Group */
  specialAbilityDescription: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentExAbilities&quot; Field Group */
  specialAbilityName: Maybe<Scalars['String']['output']>;
};

/** The &quot;HeroInformationAscentExAbilitiesPartyBuff&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationAscentExAbilitiesPartyBuff = AcfFieldGroup & AcfFieldGroupFields & HeroInformationAscentExAbilitiesPartyBuff_Fields & {
  __typename?: 'HeroInformationAscentExAbilitiesPartyBuff';
  /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentExAbilitiesPartyBuff&quot; Field Group */
  affectsParty: Maybe<Scalars['Boolean']['output']>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentExAbilitiesPartyBuff&quot; Field Group */
  stat: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentExAbilitiesPartyBuff&quot; Field Group */
  value: Maybe<Scalars['Float']['output']>;
};

/** Interface representing fields of the ACF &quot;HeroInformationAscentExAbilitiesPartyBuff&quot; Field Group */
export type HeroInformationAscentExAbilitiesPartyBuff_Fields = {
  /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentExAbilitiesPartyBuff&quot; Field Group */
  affectsParty: Maybe<Scalars['Boolean']['output']>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentExAbilitiesPartyBuff&quot; Field Group */
  stat: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentExAbilitiesPartyBuff&quot; Field Group */
  value: Maybe<Scalars['Float']['output']>;
};

/** Interface representing fields of the ACF &quot;HeroInformationAscentExAbilities&quot; Field Group */
export type HeroInformationAscentExAbilities_Fields = {
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentExAbilities&quot; Field Group */
  chainSkillDescription: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentExAbilities&quot; Field Group */
  chainSkillName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentExAbilities&quot; Field Group */
  chainStateResult: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentExAbilities&quot; Field Group */
  chainStateTrigger: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentExAbilities&quot; Field Group */
  normalAtkDescription: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentExAbilities&quot; Field Group */
  normalAtkName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentExAbilities&quot; Field Group */
  partyBuff: Maybe<Array<Maybe<HeroInformationAscentExAbilitiesPartyBuff>>>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentExAbilities&quot; Field Group */
  specialAbilityDescription: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationAscentExAbilities&quot; Field Group */
  specialAbilityName: Maybe<Scalars['String']['output']>;
};

/** The &quot;HeroInformationBioFields&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationBioFields = AcfFieldGroup & AcfFieldGroupFields & HeroInformationBioFields_Fields & {
  __typename?: 'HeroInformationBioFields';
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group */
  age: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group */
  characterVoice: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;checkbox&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group */
  compatibleEquipment: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;radio&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group */
  element: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group */
  exclusiveWeapon: Maybe<AcfContentNodeConnection>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group */
  height: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;date_picker&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group (ACF Fields of the date_picker type return a date string according to the RFC3339 spec: https://datatracker.ietf.org/doc/html/rfc3339.) */
  jpReleaseDate: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;date_picker&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group (ACF Fields of the date_picker type return a date string according to the RFC3339 spec: https://datatracker.ietf.org/doc/html/rfc3339.) */
  krReleaseDate: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group */
  maxLevel: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;date_picker&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group (ACF Fields of the date_picker type return a date string according to the RFC3339 spec: https://datatracker.ietf.org/doc/html/rfc3339.) */
  naReleaseDate: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group */
  name: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;post_object&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group */
  obtainedFrom: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group */
  rarity: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;radio&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group */
  role: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group */
  species: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group */
  story: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group */
  weight: Maybe<Scalars['String']['output']>;
};


/** The &quot;HeroInformationBioFields&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationBioFieldsExclusiveWeaponArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The &quot;HeroInformationBioFields&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationBioFieldsObtainedFromArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** The &quot;HeroInformationBioFields2&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationBioFields2 = AcfFieldGroup & AcfFieldGroupFields & HeroInformationBioFields2_Fields & {
  __typename?: 'HeroInformationBioFields2';
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields2&quot; Field Group */
  age: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields2&quot; Field Group */
  characterVoice: Maybe<Scalars['String']['output']>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields2&quot; Field Group */
  height: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields2&quot; Field Group */
  name: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields2&quot; Field Group */
  story: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields2&quot; Field Group */
  weight: Maybe<Scalars['String']['output']>;
};

/** Interface representing fields of the ACF &quot;HeroInformationBioFields2&quot; Field Group */
export type HeroInformationBioFields2_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields2&quot; Field Group */
  age: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields2&quot; Field Group */
  characterVoice: Maybe<Scalars['String']['output']>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields2&quot; Field Group */
  height: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields2&quot; Field Group */
  name: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields2&quot; Field Group */
  story: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields2&quot; Field Group */
  weight: Maybe<Scalars['String']['output']>;
};

/** Interface representing fields of the ACF &quot;HeroInformationBioFields&quot; Field Group */
export type HeroInformationBioFields_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group */
  age: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group */
  characterVoice: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;checkbox&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group */
  compatibleEquipment: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;radio&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group */
  element: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group */
  exclusiveWeapon: Maybe<AcfContentNodeConnection>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group */
  height: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;date_picker&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group (ACF Fields of the date_picker type return a date string according to the RFC3339 spec: https://datatracker.ietf.org/doc/html/rfc3339.) */
  jpReleaseDate: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;date_picker&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group (ACF Fields of the date_picker type return a date string according to the RFC3339 spec: https://datatracker.ietf.org/doc/html/rfc3339.) */
  krReleaseDate: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group */
  maxLevel: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;date_picker&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group (ACF Fields of the date_picker type return a date string according to the RFC3339 spec: https://datatracker.ietf.org/doc/html/rfc3339.) */
  naReleaseDate: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group */
  name: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;post_object&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group */
  obtainedFrom: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group */
  rarity: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;radio&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group */
  role: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group */
  species: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group */
  story: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationBioFields&quot; Field Group */
  weight: Maybe<Scalars['String']['output']>;
};


/** Interface representing fields of the ACF &quot;HeroInformationBioFields&quot; Field Group */
export type HeroInformationBioFields_FieldsExclusiveWeaponArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** Interface representing fields of the ACF &quot;HeroInformationBioFields&quot; Field Group */
export type HeroInformationBioFields_FieldsObtainedFromArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** The &quot;HeroInformationBuildGuideFields&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationBuildGuideFields = AcfFieldGroup & AcfFieldGroupFields & HeroInformationBuildGuideFields_Fields & {
  __typename?: 'HeroInformationBuildGuideFields';
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFields&quot; Field Group */
  suggestedAccessories: Maybe<Array<Maybe<HeroInformationBuildGuideFieldsSuggestedAccessories>>>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFields&quot; Field Group */
  suggestedCards: Maybe<Array<Maybe<HeroInformationBuildGuideFieldsSuggestedCards>>>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFields&quot; Field Group */
  suggestedMerch: Maybe<Array<Maybe<HeroInformationBuildGuideFieldsSuggestedMerch>>>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFields&quot; Field Group */
  suggestedShield: Maybe<Array<Maybe<HeroInformationBuildGuideFieldsSuggestedShield>>>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFields&quot; Field Group */
  suggestedWeapons: Maybe<Array<Maybe<HeroInformationBuildGuideFieldsSuggestedWeapons>>>;
};

/** The &quot;HeroInformationBuildGuideFieldsSuggestedAccessories&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationBuildGuideFieldsSuggestedAccessories = AcfFieldGroup & AcfFieldGroupFields & HeroInformationBuildGuideFieldsSuggestedAccessories_Fields & {
  __typename?: 'HeroInformationBuildGuideFieldsSuggestedAccessories';
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFieldsSuggestedAccessories&quot; Field Group */
  accessoryExplanation: Maybe<Scalars['String']['output']>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;post_object&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFieldsSuggestedAccessories&quot; Field Group */
  suggestedAccessory: Maybe<AcfContentNodeConnection>;
};


/** The &quot;HeroInformationBuildGuideFieldsSuggestedAccessories&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationBuildGuideFieldsSuggestedAccessoriesSuggestedAccessoryArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** Interface representing fields of the ACF &quot;HeroInformationBuildGuideFieldsSuggestedAccessories&quot; Field Group */
export type HeroInformationBuildGuideFieldsSuggestedAccessories_Fields = {
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFieldsSuggestedAccessories&quot; Field Group */
  accessoryExplanation: Maybe<Scalars['String']['output']>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;post_object&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFieldsSuggestedAccessories&quot; Field Group */
  suggestedAccessory: Maybe<AcfContentNodeConnection>;
};


/** Interface representing fields of the ACF &quot;HeroInformationBuildGuideFieldsSuggestedAccessories&quot; Field Group */
export type HeroInformationBuildGuideFieldsSuggestedAccessories_FieldsSuggestedAccessoryArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** The &quot;HeroInformationBuildGuideFieldsSuggestedCards&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationBuildGuideFieldsSuggestedCards = AcfFieldGroup & AcfFieldGroupFields & HeroInformationBuildGuideFieldsSuggestedCards_Fields & {
  __typename?: 'HeroInformationBuildGuideFieldsSuggestedCards';
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFieldsSuggestedCards&quot; Field Group */
  cardExplanation: Maybe<Scalars['String']['output']>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFieldsSuggestedCards&quot; Field Group */
  suggestedCard: Maybe<Scalars['String']['output']>;
};

/** Interface representing fields of the ACF &quot;HeroInformationBuildGuideFieldsSuggestedCards&quot; Field Group */
export type HeroInformationBuildGuideFieldsSuggestedCards_Fields = {
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFieldsSuggestedCards&quot; Field Group */
  cardExplanation: Maybe<Scalars['String']['output']>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFieldsSuggestedCards&quot; Field Group */
  suggestedCard: Maybe<Scalars['String']['output']>;
};

/** The &quot;HeroInformationBuildGuideFieldsSuggestedMerch&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationBuildGuideFieldsSuggestedMerch = AcfFieldGroup & AcfFieldGroupFields & HeroInformationBuildGuideFieldsSuggestedMerch_Fields & {
  __typename?: 'HeroInformationBuildGuideFieldsSuggestedMerch';
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFieldsSuggestedMerch&quot; Field Group */
  merchExplanation: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;post_object&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFieldsSuggestedMerch&quot; Field Group */
  suggestedMerch: Maybe<AcfContentNodeConnection>;
};


/** The &quot;HeroInformationBuildGuideFieldsSuggestedMerch&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationBuildGuideFieldsSuggestedMerchSuggestedMerchArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** Interface representing fields of the ACF &quot;HeroInformationBuildGuideFieldsSuggestedMerch&quot; Field Group */
export type HeroInformationBuildGuideFieldsSuggestedMerch_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFieldsSuggestedMerch&quot; Field Group */
  merchExplanation: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;post_object&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFieldsSuggestedMerch&quot; Field Group */
  suggestedMerch: Maybe<AcfContentNodeConnection>;
};


/** Interface representing fields of the ACF &quot;HeroInformationBuildGuideFieldsSuggestedMerch&quot; Field Group */
export type HeroInformationBuildGuideFieldsSuggestedMerch_FieldsSuggestedMerchArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** The &quot;HeroInformationBuildGuideFieldsSuggestedShield&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationBuildGuideFieldsSuggestedShield = AcfFieldGroup & AcfFieldGroupFields & HeroInformationBuildGuideFieldsSuggestedShield_Fields & {
  __typename?: 'HeroInformationBuildGuideFieldsSuggestedShield';
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFieldsSuggestedShield&quot; Field Group */
  shieldExplanation: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;post_object&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFieldsSuggestedShield&quot; Field Group */
  suggestedShield: Maybe<AcfContentNodeConnection>;
};


/** The &quot;HeroInformationBuildGuideFieldsSuggestedShield&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationBuildGuideFieldsSuggestedShieldSuggestedShieldArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** Interface representing fields of the ACF &quot;HeroInformationBuildGuideFieldsSuggestedShield&quot; Field Group */
export type HeroInformationBuildGuideFieldsSuggestedShield_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFieldsSuggestedShield&quot; Field Group */
  shieldExplanation: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;post_object&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFieldsSuggestedShield&quot; Field Group */
  suggestedShield: Maybe<AcfContentNodeConnection>;
};


/** Interface representing fields of the ACF &quot;HeroInformationBuildGuideFieldsSuggestedShield&quot; Field Group */
export type HeroInformationBuildGuideFieldsSuggestedShield_FieldsSuggestedShieldArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** The &quot;HeroInformationBuildGuideFieldsSuggestedWeapons&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationBuildGuideFieldsSuggestedWeapons = AcfFieldGroup & AcfFieldGroupFields & HeroInformationBuildGuideFieldsSuggestedWeapons_Fields & {
  __typename?: 'HeroInformationBuildGuideFieldsSuggestedWeapons';
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;post_object&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFieldsSuggestedWeapons&quot; Field Group */
  suggestedWeapon: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFieldsSuggestedWeapons&quot; Field Group */
  weaponExplanation: Maybe<Scalars['String']['output']>;
};


/** The &quot;HeroInformationBuildGuideFieldsSuggestedWeapons&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationBuildGuideFieldsSuggestedWeaponsSuggestedWeaponArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** Interface representing fields of the ACF &quot;HeroInformationBuildGuideFieldsSuggestedWeapons&quot; Field Group */
export type HeroInformationBuildGuideFieldsSuggestedWeapons_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;post_object&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFieldsSuggestedWeapons&quot; Field Group */
  suggestedWeapon: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFieldsSuggestedWeapons&quot; Field Group */
  weaponExplanation: Maybe<Scalars['String']['output']>;
};


/** Interface representing fields of the ACF &quot;HeroInformationBuildGuideFieldsSuggestedWeapons&quot; Field Group */
export type HeroInformationBuildGuideFieldsSuggestedWeapons_FieldsSuggestedWeaponArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** Interface representing fields of the ACF &quot;HeroInformationBuildGuideFields&quot; Field Group */
export type HeroInformationBuildGuideFields_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFields&quot; Field Group */
  suggestedAccessories: Maybe<Array<Maybe<HeroInformationBuildGuideFieldsSuggestedAccessories>>>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFields&quot; Field Group */
  suggestedCards: Maybe<Array<Maybe<HeroInformationBuildGuideFieldsSuggestedCards>>>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFields&quot; Field Group */
  suggestedMerch: Maybe<Array<Maybe<HeroInformationBuildGuideFieldsSuggestedMerch>>>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFields&quot; Field Group */
  suggestedShield: Maybe<Array<Maybe<HeroInformationBuildGuideFieldsSuggestedShield>>>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroInformationBuildGuideFields&quot; Field Group */
  suggestedWeapons: Maybe<Array<Maybe<HeroInformationBuildGuideFieldsSuggestedWeapons>>>;
};

/** The &quot;HeroInformationEvaluationFields&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationEvaluationFields = AcfFieldGroup & AcfFieldGroupFields & HeroInformationEvaluationFields_Fields & {
  __typename?: 'HeroInformationEvaluationFields';
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationEvaluationFields&quot; Field Group */
  cons: Maybe<Scalars['String']['output']>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationEvaluationFields&quot; Field Group */
  pros: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;checkbox&quot; Field Type added to the schema as part of the &quot;HeroInformationEvaluationFields&quot; Field Group */
  tags: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** Interface representing fields of the ACF &quot;HeroInformationEvaluationFields&quot; Field Group */
export type HeroInformationEvaluationFields_Fields = {
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationEvaluationFields&quot; Field Group */
  cons: Maybe<Scalars['String']['output']>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationEvaluationFields&quot; Field Group */
  pros: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;checkbox&quot; Field Type added to the schema as part of the &quot;HeroInformationEvaluationFields&quot; Field Group */
  tags: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** The &quot;HeroInformationEvolutionFields&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationEvolutionFields = AcfFieldGroup & AcfFieldGroupFields & HeroInformationEvolutionFields_Fields & {
  __typename?: 'HeroInformationEvolutionFields';
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;HeroInformationEvolutionFields&quot; Field Group */
  ascension: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;HeroInformationEvolutionFields&quot; Field Group */
  evolution1: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;HeroInformationEvolutionFields&quot; Field Group */
  evolution2: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;HeroInformationEvolutionFields&quot; Field Group */
  evolution3: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;HeroInformationEvolutionFields&quot; Field Group */
  evolution4: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;HeroInformationEvolutionFields&quot; Field Group */
  evolution5: Maybe<AcfMediaItemConnectionEdge>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
};

/** The &quot;HeroInformationEvolutionFields2&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationEvolutionFields2 = AcfFieldGroup & AcfFieldGroupFields & HeroInformationEvolutionFields2_Fields & {
  __typename?: 'HeroInformationEvolutionFields2';
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;HeroInformationEvolutionFields2&quot; Field Group */
  evolution1: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;HeroInformationEvolutionFields2&quot; Field Group */
  evolution2: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;HeroInformationEvolutionFields2&quot; Field Group */
  evolution3: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;HeroInformationEvolutionFields2&quot; Field Group */
  evolution4: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;HeroInformationEvolutionFields2&quot; Field Group */
  evolution5: Maybe<AcfMediaItemConnectionEdge>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
};

/** Interface representing fields of the ACF &quot;HeroInformationEvolutionFields2&quot; Field Group */
export type HeroInformationEvolutionFields2_Fields = {
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;HeroInformationEvolutionFields2&quot; Field Group */
  evolution1: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;HeroInformationEvolutionFields2&quot; Field Group */
  evolution2: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;HeroInformationEvolutionFields2&quot; Field Group */
  evolution3: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;HeroInformationEvolutionFields2&quot; Field Group */
  evolution4: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;HeroInformationEvolutionFields2&quot; Field Group */
  evolution5: Maybe<AcfMediaItemConnectionEdge>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
};

/** Interface representing fields of the ACF &quot;HeroInformationEvolutionFields&quot; Field Group */
export type HeroInformationEvolutionFields_Fields = {
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;HeroInformationEvolutionFields&quot; Field Group */
  ascension: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;HeroInformationEvolutionFields&quot; Field Group */
  evolution1: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;HeroInformationEvolutionFields&quot; Field Group */
  evolution2: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;HeroInformationEvolutionFields&quot; Field Group */
  evolution3: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;HeroInformationEvolutionFields&quot; Field Group */
  evolution4: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;HeroInformationEvolutionFields&quot; Field Group */
  evolution5: Maybe<AcfMediaItemConnectionEdge>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
};

/** The &quot;HeroInformationExAbilities&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationExAbilities = AcfFieldGroup & AcfFieldGroupFields & HeroInformationExAbilities_Fields & {
  __typename?: 'HeroInformationExAbilities';
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationExAbilities&quot; Field Group */
  chainSkillDescription: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationExAbilities&quot; Field Group */
  chainSkillName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;HeroInformationExAbilities&quot; Field Group */
  chainStateResult: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;HeroInformationExAbilities&quot; Field Group */
  chainStateTrigger: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationExAbilities&quot; Field Group */
  normalAtkDescription: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationExAbilities&quot; Field Group */
  normalAtkName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroInformationExAbilities&quot; Field Group */
  partyBuff: Maybe<Array<Maybe<HeroInformationExAbilitiesPartyBuff>>>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationExAbilities&quot; Field Group */
  specialAbilityDescription: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationExAbilities&quot; Field Group */
  specialAbilityName: Maybe<Scalars['String']['output']>;
};

/** The &quot;HeroInformationExAbilitiesPartyBuff&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationExAbilitiesPartyBuff = AcfFieldGroup & AcfFieldGroupFields & HeroInformationExAbilitiesPartyBuff_Fields & {
  __typename?: 'HeroInformationExAbilitiesPartyBuff';
  /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;HeroInformationExAbilitiesPartyBuff&quot; Field Group */
  affectsParty: Maybe<Scalars['Boolean']['output']>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;HeroInformationExAbilitiesPartyBuff&quot; Field Group */
  stat: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationExAbilitiesPartyBuff&quot; Field Group */
  value: Maybe<Scalars['Float']['output']>;
};

/** Interface representing fields of the ACF &quot;HeroInformationExAbilitiesPartyBuff&quot; Field Group */
export type HeroInformationExAbilitiesPartyBuff_Fields = {
  /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;HeroInformationExAbilitiesPartyBuff&quot; Field Group */
  affectsParty: Maybe<Scalars['Boolean']['output']>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;HeroInformationExAbilitiesPartyBuff&quot; Field Group */
  stat: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationExAbilitiesPartyBuff&quot; Field Group */
  value: Maybe<Scalars['Float']['output']>;
};

/** Interface representing fields of the ACF &quot;HeroInformationExAbilities&quot; Field Group */
export type HeroInformationExAbilities_Fields = {
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationExAbilities&quot; Field Group */
  chainSkillDescription: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationExAbilities&quot; Field Group */
  chainSkillName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;HeroInformationExAbilities&quot; Field Group */
  chainStateResult: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;HeroInformationExAbilities&quot; Field Group */
  chainStateTrigger: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationExAbilities&quot; Field Group */
  normalAtkDescription: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationExAbilities&quot; Field Group */
  normalAtkName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroInformationExAbilities&quot; Field Group */
  partyBuff: Maybe<Array<Maybe<HeroInformationExAbilitiesPartyBuff>>>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationExAbilities&quot; Field Group */
  specialAbilityDescription: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationExAbilities&quot; Field Group */
  specialAbilityName: Maybe<Scalars['String']['output']>;
};

/** The &quot;HeroInformationIllustrations&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationIllustrations = AcfFieldGroup & AcfFieldGroupFields & HeroInformationIllustrations_Fields & {
  __typename?: 'HeroInformationIllustrations';
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;image_aspect_ratio_crop&quot; Field Type added to the schema as part of the &quot;HeroInformationIllustrations&quot; Field Group */
  image: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationIllustrations&quot; Field Group */
  name: Maybe<Scalars['String']['output']>;
};

/** Interface representing fields of the ACF &quot;HeroInformationIllustrations&quot; Field Group */
export type HeroInformationIllustrations_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;image_aspect_ratio_crop&quot; Field Type added to the schema as part of the &quot;HeroInformationIllustrations&quot; Field Group */
  image: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationIllustrations&quot; Field Group */
  name: Maybe<Scalars['String']['output']>;
};

/** The &quot;HeroInformationMlbAwakeningFields&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationMlbAwakeningFields = AcfFieldGroup & AcfFieldGroupFields & HeroInformationMlbAwakeningFields_Fields & {
  __typename?: 'HeroInformationMlbAwakeningFields';
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationMlbAwakeningFields&quot; Field Group */
  gold: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationMlbAwakeningFields&quot; Field Group */
  highGradeAtkMlb: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationMlbAwakeningFields&quot; Field Group */
  highGradeDefMlb: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationMlbAwakeningFields&quot; Field Group */
  highGradeDreamMlb: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationMlbAwakeningFields&quot; Field Group */
  highGradeHpMlb: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationMlbAwakeningFields&quot; Field Group */
  legendaryAwakeningMlb: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationMlbAwakeningFields&quot; Field Group */
  lowGradeAtkMlb: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationMlbAwakeningFields&quot; Field Group */
  lowGradeDefMlb: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationMlbAwakeningFields&quot; Field Group */
  lowGradeDreamMlb: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationMlbAwakeningFields&quot; Field Group */
  lowGradeHpMlb: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationMlbAwakeningFields&quot; Field Group */
  midGradeAtkMlb: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationMlbAwakeningFields&quot; Field Group */
  midGradeDefMlb: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationMlbAwakeningFields&quot; Field Group */
  midGradeDreamMlb: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationMlbAwakeningFields&quot; Field Group */
  midGradeHpMlb: Maybe<Scalars['Float']['output']>;
};

/** Interface representing fields of the ACF &quot;HeroInformationMlbAwakeningFields&quot; Field Group */
export type HeroInformationMlbAwakeningFields_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationMlbAwakeningFields&quot; Field Group */
  gold: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationMlbAwakeningFields&quot; Field Group */
  highGradeAtkMlb: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationMlbAwakeningFields&quot; Field Group */
  highGradeDefMlb: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationMlbAwakeningFields&quot; Field Group */
  highGradeDreamMlb: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationMlbAwakeningFields&quot; Field Group */
  highGradeHpMlb: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationMlbAwakeningFields&quot; Field Group */
  legendaryAwakeningMlb: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationMlbAwakeningFields&quot; Field Group */
  lowGradeAtkMlb: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationMlbAwakeningFields&quot; Field Group */
  lowGradeDefMlb: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationMlbAwakeningFields&quot; Field Group */
  lowGradeDreamMlb: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationMlbAwakeningFields&quot; Field Group */
  lowGradeHpMlb: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationMlbAwakeningFields&quot; Field Group */
  midGradeAtkMlb: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationMlbAwakeningFields&quot; Field Group */
  midGradeDefMlb: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationMlbAwakeningFields&quot; Field Group */
  midGradeDreamMlb: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationMlbAwakeningFields&quot; Field Group */
  midGradeHpMlb: Maybe<Scalars['Float']['output']>;
};

/** The &quot;HeroInformationPortrait&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationPortrait = AcfFieldGroup & AcfFieldGroupFields & HeroInformationPortrait_Fields & {
  __typename?: 'HeroInformationPortrait';
  /** Field of the &quot;image_aspect_ratio_crop&quot; Field Type added to the schema as part of the &quot;HeroInformationPortrait&quot; Field Group */
  art: Maybe<AcfMediaItemConnectionEdge>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationPortrait&quot; Field Group */
  title: Maybe<Scalars['String']['output']>;
};

/** The &quot;HeroInformationPortrait2&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationPortrait2 = AcfFieldGroup & AcfFieldGroupFields & HeroInformationPortrait2_Fields & {
  __typename?: 'HeroInformationPortrait2';
  /** Field of the &quot;image_aspect_ratio_crop&quot; Field Type added to the schema as part of the &quot;HeroInformationPortrait2&quot; Field Group */
  art: Maybe<AcfMediaItemConnectionEdge>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationPortrait2&quot; Field Group */
  title: Maybe<Scalars['String']['output']>;
};

/** Interface representing fields of the ACF &quot;HeroInformationPortrait2&quot; Field Group */
export type HeroInformationPortrait2_Fields = {
  /** Field of the &quot;image_aspect_ratio_crop&quot; Field Type added to the schema as part of the &quot;HeroInformationPortrait2&quot; Field Group */
  art: Maybe<AcfMediaItemConnectionEdge>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationPortrait2&quot; Field Group */
  title: Maybe<Scalars['String']['output']>;
};

/** Interface representing fields of the ACF &quot;HeroInformationPortrait&quot; Field Group */
export type HeroInformationPortrait_Fields = {
  /** Field of the &quot;image_aspect_ratio_crop&quot; Field Type added to the schema as part of the &quot;HeroInformationPortrait&quot; Field Group */
  art: Maybe<AcfMediaItemConnectionEdge>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationPortrait&quot; Field Group */
  title: Maybe<Scalars['String']['output']>;
};

/** The &quot;HeroInformationStatFields&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationStatFields = AcfFieldGroup & AcfFieldGroupFields & HeroInformationStatFields_Fields & {
  __typename?: 'HeroInformationStatFields';
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationStatFields&quot; Field Group */
  atk: Maybe<Scalars['Float']['output']>;
  /** (Auto Updates) */
  atkRank: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationStatFields&quot; Field Group */
  basicResistance: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationStatFields&quot; Field Group */
  cardSlot: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationStatFields&quot; Field Group */
  crit: Maybe<Scalars['Float']['output']>;
  /** (Auto Updates) */
  critRank: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationStatFields&quot; Field Group */
  damageReduction: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationStatFields&quot; Field Group */
  darkResistance: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationStatFields&quot; Field Group */
  def: Maybe<Scalars['Float']['output']>;
  /** (Auto Updates) */
  defRank: Maybe<Scalars['Float']['output']>;
  /** (Auto Updates) */
  drRank: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationStatFields&quot; Field Group */
  earthResistance: Maybe<Scalars['Float']['output']>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationStatFields&quot; Field Group */
  fireResistance: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationStatFields&quot; Field Group */
  heal: Maybe<Scalars['Float']['output']>;
  /** (Auto Updates) */
  healRank: Maybe<Scalars['Float']['output']>;
  /** (Auto Updates) */
  heroCount: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationStatFields&quot; Field Group */
  hp: Maybe<Scalars['Float']['output']>;
  /** (Auto Updates) */
  hpRank: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationStatFields&quot; Field Group */
  lightResistance: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationStatFields&quot; Field Group */
  waterResistance: Maybe<Scalars['Float']['output']>;
};

/** Interface representing fields of the ACF &quot;HeroInformationStatFields&quot; Field Group */
export type HeroInformationStatFields_Fields = {
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationStatFields&quot; Field Group */
  atk: Maybe<Scalars['Float']['output']>;
  /** (Auto Updates) */
  atkRank: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationStatFields&quot; Field Group */
  basicResistance: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationStatFields&quot; Field Group */
  cardSlot: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationStatFields&quot; Field Group */
  crit: Maybe<Scalars['Float']['output']>;
  /** (Auto Updates) */
  critRank: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationStatFields&quot; Field Group */
  damageReduction: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationStatFields&quot; Field Group */
  darkResistance: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationStatFields&quot; Field Group */
  def: Maybe<Scalars['Float']['output']>;
  /** (Auto Updates) */
  defRank: Maybe<Scalars['Float']['output']>;
  /** (Auto Updates) */
  drRank: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationStatFields&quot; Field Group */
  earthResistance: Maybe<Scalars['Float']['output']>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationStatFields&quot; Field Group */
  fireResistance: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationStatFields&quot; Field Group */
  heal: Maybe<Scalars['Float']['output']>;
  /** (Auto Updates) */
  healRank: Maybe<Scalars['Float']['output']>;
  /** (Auto Updates) */
  heroCount: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationStatFields&quot; Field Group */
  hp: Maybe<Scalars['Float']['output']>;
  /** (Auto Updates) */
  hpRank: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationStatFields&quot; Field Group */
  lightResistance: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;HeroInformationStatFields&quot; Field Group */
  waterResistance: Maybe<Scalars['Float']['output']>;
};

/** The &quot;HeroInformationStatPriorities&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationStatPriorities = AcfFieldGroup & AcfFieldGroupFields & HeroInformationStatPriorities_Fields & {
  __typename?: 'HeroInformationStatPriorities';
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationStatPriorities&quot; Field Group */
  buildName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationStatPriorities&quot; Field Group */
  explanation: Maybe<Scalars['String']['output']>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;HeroInformationStatPriorities&quot; Field Group */
  statPriority: Maybe<AcfContentNodeConnection>;
};


/** The &quot;HeroInformationStatPriorities&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationStatPrioritiesStatPriorityArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** Interface representing fields of the ACF &quot;HeroInformationStatPriorities&quot; Field Group */
export type HeroInformationStatPriorities_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;HeroInformationStatPriorities&quot; Field Group */
  buildName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationStatPriorities&quot; Field Group */
  explanation: Maybe<Scalars['String']['output']>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;HeroInformationStatPriorities&quot; Field Group */
  statPriority: Maybe<AcfContentNodeConnection>;
};


/** Interface representing fields of the ACF &quot;HeroInformationStatPriorities&quot; Field Group */
export type HeroInformationStatPriorities_FieldsStatPriorityArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** The &quot;HeroInformationSynergies&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationSynergies = AcfFieldGroup & AcfFieldGroupFields & HeroInformationSynergies_Fields & {
  __typename?: 'HeroInformationSynergies';
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;post_object&quot; Field Type added to the schema as part of the &quot;HeroInformationSynergies&quot; Field Group */
  hero: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationSynergies&quot; Field Group */
  synergyNotes: Maybe<Scalars['String']['output']>;
};


/** The &quot;HeroInformationSynergies&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type HeroInformationSynergiesHeroArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** Interface representing fields of the ACF &quot;HeroInformationSynergies&quot; Field Group */
export type HeroInformationSynergies_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;post_object&quot; Field Type added to the schema as part of the &quot;HeroInformationSynergies&quot; Field Group */
  hero: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;HeroInformationSynergies&quot; Field Group */
  synergyNotes: Maybe<Scalars['String']['output']>;
};


/** Interface representing fields of the ACF &quot;HeroInformationSynergies&quot; Field Group */
export type HeroInformationSynergies_FieldsHeroArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** Interface representing fields of the ACF &quot;HeroInformation&quot; Field Group */
export type HeroInformation_Fields = {
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  abilityFields: Maybe<HeroInformationAbilityFields>;
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  analysisFields: Maybe<HeroInformationAnalysisFields>;
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  ascentAbilities: Maybe<HeroInformationAscentAbilities>;
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  ascentExAbilities: Maybe<HeroInformationAscentExAbilities>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  background: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  bioFields: Maybe<HeroInformationBioFields>;
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  bioFields2: Maybe<HeroInformationBioFields2>;
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  buildGuideFields: Maybe<HeroInformationBuildGuideFields>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  costumes: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  evaluationFields: Maybe<HeroInformationEvaluationFields>;
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  evolutionFields: Maybe<HeroInformationEvolutionFields>;
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  evolutionFields2: Maybe<HeroInformationEvolutionFields2>;
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  exAbilities: Maybe<HeroInformationExAbilities>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  illustrations: Maybe<Array<Maybe<HeroInformationIllustrations>>>;
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  mlbAwakeningFields: Maybe<HeroInformationMlbAwakeningFields>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  portrait: Maybe<Array<Maybe<HeroInformationPortrait>>>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  portrait2: Maybe<Array<Maybe<HeroInformationPortrait2>>>;
  /** Field of the &quot;group&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  statFields: Maybe<HeroInformationStatFields>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  statPriorities: Maybe<Array<Maybe<HeroInformationStatPriorities>>>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  synergies: Maybe<Array<Maybe<HeroInformationSynergies>>>;
  /** Field of the &quot;image_aspect_ratio_crop&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  thumbnail: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;checkbox&quot; Field Type added to the schema as part of the &quot;HeroInformation&quot; Field Group */
  variations: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** Interface representing fields of the ACF &quot;HeroInformation&quot; Field Group */
export type HeroInformation_FieldsCostumesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** Connection between the Hero type and the Comment type */
export type HeroToCommentConnection = CommentConnection & Connection & {
  __typename?: 'HeroToCommentConnection';
  /** Edges for the HeroToCommentConnection connection */
  edges: Array<HeroToCommentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Comment>;
  /** Information about pagination in a connection. */
  pageInfo: HeroToCommentConnectionPageInfo;
};

/** An edge in a connection */
export type HeroToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  __typename?: 'HeroToCommentConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Comment;
};

/** Page Info on the &quot;HeroToCommentConnection&quot; */
export type HeroToCommentConnectionPageInfo = CommentConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'HeroToCommentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the HeroToCommentConnection connection */
export type HeroToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail: InputMaybe<Scalars['String']['input']>;
  /** Array of author IDs to include comments for. */
  authorIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Comment author URL. */
  authorUrl: InputMaybe<Scalars['String']['input']>;
  /** Array of comment IDs to include. */
  commentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Include comments of a given type. */
  commentType: InputMaybe<Scalars['String']['input']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn: InputMaybe<Scalars['String']['input']>;
  /** Content object author ID to limit results by. */
  contentAuthor: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId: InputMaybe<Scalars['ID']['input']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName: InputMaybe<Scalars['String']['input']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent: InputMaybe<Scalars['Int']['input']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Karma score to retrieve matching comments for. */
  karma: InputMaybe<Scalars['Int']['input']>;
  /** The cardinality of the order of the connection */
  order: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent: InputMaybe<Scalars['Int']['input']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Comment status to limit results by. */
  status: InputMaybe<Scalars['String']['input']>;
  /** Include comments for a specific user ID. */
  userId: InputMaybe<Scalars['ID']['input']>;
};

/** Connection between the Hero type and the hero type */
export type HeroToHeroConnection = Connection & HeroConnection & {
  __typename?: 'HeroToHeroConnection';
  /** Edges for the HeroToHeroConnection connection */
  edges: Array<HeroToHeroConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Hero>;
  /** Information about pagination in a connection. */
  pageInfo: HeroToHeroConnectionPageInfo;
};

/** An edge in a connection */
export type HeroToHeroConnectionEdge = Edge & HeroConnectionEdge & {
  __typename?: 'HeroToHeroConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated This content type is not hierarchical and typically will not have ancestors
   */
  cursor: Maybe<Scalars['String']['output']>;
  /**
   * The item at the end of the edge
   * @deprecated This content type is not hierarchical and typically will not have ancestors
   */
  node: Hero;
};

/** Page Info on the &quot;HeroToHeroConnection&quot; */
export type HeroToHeroConnectionPageInfo = HeroConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'HeroToHeroConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Connection between the Hero type and the hero type */
export type HeroToParentConnectionEdge = Edge & HeroConnectionEdge & OneToOneConnection & {
  __typename?: 'HeroToParentConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /**
   * The node of the connection, without the edges
   * @deprecated This content type is not hierarchical and typically will not have a parent
   */
  node: Hero;
};

/** Connection between the Hero type and the hero type */
export type HeroToPreviewConnectionEdge = Edge & HeroConnectionEdge & OneToOneConnection & {
  __typename?: 'HeroToPreviewConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  node: Hero;
};

/** Connection between the Hero type and the hero type */
export type HeroToRevisionConnection = Connection & HeroConnection & {
  __typename?: 'HeroToRevisionConnection';
  /** Edges for the HeroToRevisionConnection connection */
  edges: Array<HeroToRevisionConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Hero>;
  /** Information about pagination in a connection. */
  pageInfo: HeroToRevisionConnectionPageInfo;
};

/** An edge in a connection */
export type HeroToRevisionConnectionEdge = Edge & HeroConnectionEdge & {
  __typename?: 'HeroToRevisionConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Hero;
};

/** Page Info on the &quot;HeroToRevisionConnection&quot; */
export type HeroToRevisionConnectionPageInfo = HeroConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'HeroToRevisionConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the HeroToRevisionConnection connection */
export type HeroToRevisionConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNode = {
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  children: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String']['output'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** Post publishing date. */
  date: Maybe<Scalars['String']['output']>;
  /** The publishing date set in GMT. */
  dateGmt: Maybe<Scalars['String']['output']>;
  /** The desired slug of the post */
  desiredSlug: Maybe<Scalars['String']['output']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure: Maybe<Scalars['String']['output']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid: Maybe<Scalars['String']['output']>;
  /** The globally unique ID for the object */
  id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is a node in the preview state */
  isPreview: Maybe<Scalars['Boolean']['output']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** The user that most recently edited the node */
  lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link: Maybe<Scalars['String']['output']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified: Maybe<Scalars['String']['output']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt: Maybe<Scalars['String']['output']>;
  /** The parent of the node. The parent object can be of various types */
  parent: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the parent node. */
  parentId: Maybe<Scalars['ID']['output']>;
  /** The database id of the preview node */
  previewRevisionDatabaseId: Maybe<Scalars['Int']['output']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId: Maybe<Scalars['ID']['output']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug: Maybe<Scalars['String']['output']>;
  /** The current status of the object */
  status: Maybe<Scalars['String']['output']>;
  /** The template assigned to a node of content */
  template: Maybe<ContentTemplate>;
  /** The unique resource identifier path */
  uri: Maybe<Scalars['String']['output']>;
};


/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeAncestorsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeChildrenArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNodeEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToContentNodeAncestorsConnection = Connection & ContentNodeConnection & {
  __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnection';
  /** Edges for the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
  edges: Array<HierarchicalContentNodeToContentNodeAncestorsConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo;
};

/** An edge in a connection */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;HierarchicalContentNodeToContentNodeAncestorsConnection&quot; */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
export type HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToContentNodeChildrenConnection = Connection & ContentNodeConnection & {
  __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnection';
  /** Edges for the HierarchicalContentNodeToContentNodeChildrenConnection connection */
  edges: Array<HierarchicalContentNodeToContentNodeChildrenConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo;
};

/** An edge in a connection */
export type HierarchicalContentNodeToContentNodeChildrenConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;HierarchicalContentNodeToContentNodeChildrenConnection&quot; */
export type HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the HierarchicalContentNodeToContentNodeChildrenConnection connection */
export type HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type HierarchicalContentNodeToParentContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'HierarchicalContentNodeToParentContentNodeConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  node: ContentNode;
};

/** Node with hierarchical (parent/child) relationships */
export type HierarchicalNode = {
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** The globally unique ID for the object */
  id: Scalars['ID']['output'];
  /** Database id of the parent node */
  parentDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the parent node. */
  parentId: Maybe<Scalars['ID']['output']>;
};

/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNode = {
  /** The number of objects connected to the object */
  count: Maybe<Scalars['Int']['output']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** The description of the object */
  description: Maybe<Scalars['String']['output']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The globally unique ID for the object */
  id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is restricted from the current viewer */
  isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** The link to the term */
  link: Maybe<Scalars['String']['output']>;
  /** The human friendly name of the object. */
  name: Maybe<Scalars['String']['output']>;
  /** Database id of the parent node */
  parentDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the parent node. */
  parentId: Maybe<Scalars['ID']['output']>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug: Maybe<Scalars['String']['output']>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName: Maybe<Scalars['String']['output']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId: Maybe<Scalars['Int']['output']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId: Maybe<Scalars['Int']['output']>;
  /** The unique resource identifier path */
  uri: Maybe<Scalars['String']['output']>;
};


/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNodeEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNodeEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** The item type */
export type Item = ContentNode & DatabaseIdentifier & MenuItemLinkable & Node & NodeWithComments & NodeWithExcerpt & NodeWithFeaturedImage & NodeWithRevisions & NodeWithTemplate & NodeWithTitle & Previewable & UniformResourceIdentifiable & WithAcfCostume & WithAcfEquipmentOptions & WithAcfGuideFields & WithAcfItemInformation & WithAcfWeapons & {
  __typename?: 'Item';
  /**
   * The ancestors of the content node.
   * @deprecated This content type is not hierarchical and typically will not have ancestors
   */
  ancestors: Maybe<ItemToItemConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount: Maybe<Scalars['Int']['output']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus: Maybe<Scalars['String']['output']>;
  /** Connection between the Item type and the Comment type */
  comments: Maybe<ItemToCommentConnection>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String']['output'];
  /** Fields of the Costume ACF Field Group */
  costume: Maybe<Costume>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** Post publishing date. */
  date: Maybe<Scalars['String']['output']>;
  /** The publishing date set in GMT. */
  dateGmt: Maybe<Scalars['String']['output']>;
  /** The desired slug of the post */
  desiredSlug: Maybe<Scalars['String']['output']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure: Maybe<Scalars['String']['output']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** Fields of the EquipmentOptions ACF Field Group */
  equipmentOptions: Maybe<EquipmentOptions>;
  /** The excerpt of the post. */
  excerpt: Maybe<Scalars['String']['output']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId: Maybe<Scalars['Int']['output']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId: Maybe<Scalars['ID']['output']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid: Maybe<Scalars['String']['output']>;
  /** Fields of the GuideFields ACF Field Group */
  guideFields: Maybe<GuideFields>;
  /** Whether the items object is password protected. */
  hasPassword: Maybe<Scalars['Boolean']['output']>;
  /** The globally unique identifier of the items object. */
  id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is a node in the preview state */
  isPreview: Maybe<Scalars['Boolean']['output']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** True if the node is a revision of another node */
  isRevision: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  itemId: Scalars['Int']['output'];
  /** Fields of the ItemInformation ACF Field Group */
  itemInformation: Maybe<ItemInformation>;
  /** Connection between the Item type and the itemType type */
  itemTypes: Maybe<ItemToItemTypeConnection>;
  /** The user that most recently edited the node */
  lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link: Maybe<Scalars['String']['output']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified: Maybe<Scalars['String']['output']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt: Maybe<Scalars['String']['output']>;
  /**
   * The parent of the content node.
   * @deprecated This content type is not hierarchical and typically will not have a parent
   */
  parent: Maybe<ItemToParentConnectionEdge>;
  /** The password for the items object. */
  password: Maybe<Scalars['String']['output']>;
  /** Connection between the Item type and the item type */
  preview: Maybe<ItemToPreviewConnectionEdge>;
  /** The database id of the preview node */
  previewRevisionDatabaseId: Maybe<Scalars['Int']['output']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId: Maybe<Scalars['ID']['output']>;
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  revisionOf: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
  /** Connection between the Item type and the item type */
  revisions: Maybe<ItemToRevisionConnection>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug: Maybe<Scalars['String']['output']>;
  /** The current status of the object */
  status: Maybe<Scalars['String']['output']>;
  /** The template assigned to the node */
  template: Maybe<ContentTemplate>;
  /** Connection between the Item type and the TermNode type */
  terms: Maybe<ItemToTermNodeConnection>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title: Maybe<Scalars['String']['output']>;
  /** The unique resource identifier path */
  uri: Maybe<Scalars['String']['output']>;
  /** Fields of the Weapons ACF Field Group */
  weapons: Maybe<Weapons>;
};


/** The item type */
export type ItemAncestorsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The item type */
export type ItemCommentsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ItemToCommentConnectionWhereArgs>;
};


/** The item type */
export type ItemEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The item type */
export type ItemEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The item type */
export type ItemExcerptArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The item type */
export type ItemItemTypesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ItemToItemTypeConnectionWhereArgs>;
};


/** The item type */
export type ItemRevisionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ItemToRevisionConnectionWhereArgs>;
};


/** The item type */
export type ItemTermsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ItemToTermNodeConnectionWhereArgs>;
};


/** The item type */
export type ItemTitleArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};

/** The &quot;ItemBanner&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ItemBanner = AcfFieldGroup & AcfFieldGroupFields & ItemBanner_Fields & {
  __typename?: 'ItemBanner';
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ItemBanner&quot; Field Group */
  exclusiveRate: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;ItemBanner&quot; Field Group */
  featuredItems: Maybe<Array<Maybe<ItemBannerFeaturedItems>>>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ItemBanner&quot; Field Group */
  fiveStarRate: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ItemBanner&quot; Field Group */
  fourStarRate: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ItemBanner&quot; Field Group */
  threeStarRate: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ItemBanner&quot; Field Group */
  twoStarRate: Maybe<Scalars['Float']['output']>;
};

/** The &quot;ItemBannerFeaturedItems&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ItemBannerFeaturedItems = AcfFieldGroup & AcfFieldGroupFields & ItemBannerFeaturedItems_Fields & {
  __typename?: 'ItemBannerFeaturedItems';
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;ItemBannerFeaturedItems&quot; Field Group */
  featuredItem: Maybe<AcfContentNodeConnection>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ItemBannerFeaturedItems&quot; Field Group */
  rate: Maybe<Scalars['Float']['output']>;
};


/** The &quot;ItemBannerFeaturedItems&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ItemBannerFeaturedItemsFeaturedItemArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** Interface representing fields of the ACF &quot;ItemBannerFeaturedItems&quot; Field Group */
export type ItemBannerFeaturedItems_Fields = {
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;ItemBannerFeaturedItems&quot; Field Group */
  featuredItem: Maybe<AcfContentNodeConnection>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ItemBannerFeaturedItems&quot; Field Group */
  rate: Maybe<Scalars['Float']['output']>;
};


/** Interface representing fields of the ACF &quot;ItemBannerFeaturedItems&quot; Field Group */
export type ItemBannerFeaturedItems_FieldsFeaturedItemArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** Interface representing fields of the ACF &quot;ItemBanner&quot; Field Group */
export type ItemBanner_Fields = {
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ItemBanner&quot; Field Group */
  exclusiveRate: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;ItemBanner&quot; Field Group */
  featuredItems: Maybe<Array<Maybe<ItemBannerFeaturedItems>>>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ItemBanner&quot; Field Group */
  fiveStarRate: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ItemBanner&quot; Field Group */
  fourStarRate: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ItemBanner&quot; Field Group */
  threeStarRate: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ItemBanner&quot; Field Group */
  twoStarRate: Maybe<Scalars['Float']['output']>;
};

/** Connection to item Nodes */
export type ItemConnection = {
  /** A list of edges (relational context) between RootQuery and connected item Nodes */
  edges: Array<ItemConnectionEdge>;
  /** A list of connected item Nodes */
  nodes: Array<Item>;
  /** Information about pagination in a connection. */
  pageInfo: ItemConnectionPageInfo;
};

/** Edge between a Node and a connected item */
export type ItemConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected item Node */
  node: Item;
};

/** Page Info on the connected ItemConnectionEdge */
export type ItemConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ItemIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** The &quot;ItemInformation&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ItemInformation = AcfFieldGroup & AcfFieldGroupFields & ItemInformation_Fields & {
  __typename?: 'ItemInformation';
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  achievement: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  artifactDescription: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  artifactPassives: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;radio&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  artifactRarity: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  battleMedalShopCost: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  bottleCapCost: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  collections: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  cost: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;radio&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  costumeWeaponType: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  equipmentShopCost: Maybe<Scalars['Float']['output']>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;checkbox&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  howToObtain: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  image: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;taxonomy&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  itemType: Maybe<AcfTermNodeConnection>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  maxLevel: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  mileageShopCost: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  mirrorShardCost: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  mysticThreadCost: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  questCompleted: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  rarity: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  stageLocation: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  unreleased: Maybe<Scalars['Boolean']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  worldCompleted: Maybe<Scalars['String']['output']>;
};


/** The &quot;ItemInformation&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ItemInformationCollectionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The &quot;ItemInformation&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ItemInformationItemTypeArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The &quot;ItemInformation&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ItemInformationQuestCompletedArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The &quot;ItemInformation&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type ItemInformationStageLocationArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** Interface representing fields of the ACF &quot;ItemInformation&quot; Field Group */
export type ItemInformation_Fields = {
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  achievement: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  artifactDescription: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  artifactPassives: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;radio&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  artifactRarity: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  battleMedalShopCost: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  bottleCapCost: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  collections: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  cost: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;radio&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  costumeWeaponType: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  equipmentShopCost: Maybe<Scalars['Float']['output']>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;checkbox&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  howToObtain: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;image&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  image: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;taxonomy&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  itemType: Maybe<AcfTermNodeConnection>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  maxLevel: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  mileageShopCost: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  mirrorShardCost: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  mysticThreadCost: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  questCompleted: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  rarity: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  stageLocation: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  unreleased: Maybe<Scalars['Boolean']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;ItemInformation&quot; Field Group */
  worldCompleted: Maybe<Scalars['String']['output']>;
};


/** Interface representing fields of the ACF &quot;ItemInformation&quot; Field Group */
export type ItemInformation_FieldsCollectionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** Interface representing fields of the ACF &quot;ItemInformation&quot; Field Group */
export type ItemInformation_FieldsItemTypeArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** Interface representing fields of the ACF &quot;ItemInformation&quot; Field Group */
export type ItemInformation_FieldsQuestCompletedArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** Interface representing fields of the ACF &quot;ItemInformation&quot; Field Group */
export type ItemInformation_FieldsStageLocationArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** Set relationships between the item to itemTypes */
export type ItemItemTypesInput = {
  /** If true, this will append the itemType to existing related itemTypes. If false, this will replace existing relationships. Default true. */
  append: InputMaybe<Scalars['Boolean']['input']>;
  /** The input list of items to set. */
  nodes: InputMaybe<Array<InputMaybe<ItemItemTypesNodeInput>>>;
};

/** List of itemTypes to connect the item to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type ItemItemTypesNodeInput = {
  /** The description of the itemType. This field is used to set a description of the itemType if a new one is created during the mutation. */
  description: InputMaybe<Scalars['String']['input']>;
  /** The ID of the itemType. If present, this will be used to connect to the item. If no existing itemType exists with this ID, no connection will be made. */
  id: InputMaybe<Scalars['ID']['input']>;
  /** The name of the itemType. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name: InputMaybe<Scalars['String']['input']>;
  /** The slug of the itemType. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the Item type and the Comment type */
export type ItemToCommentConnection = CommentConnection & Connection & {
  __typename?: 'ItemToCommentConnection';
  /** Edges for the ItemToCommentConnection connection */
  edges: Array<ItemToCommentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Comment>;
  /** Information about pagination in a connection. */
  pageInfo: ItemToCommentConnectionPageInfo;
};

/** An edge in a connection */
export type ItemToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  __typename?: 'ItemToCommentConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Comment;
};

/** Page Info on the &quot;ItemToCommentConnection&quot; */
export type ItemToCommentConnectionPageInfo = CommentConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'ItemToCommentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the ItemToCommentConnection connection */
export type ItemToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail: InputMaybe<Scalars['String']['input']>;
  /** Array of author IDs to include comments for. */
  authorIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Comment author URL. */
  authorUrl: InputMaybe<Scalars['String']['input']>;
  /** Array of comment IDs to include. */
  commentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Include comments of a given type. */
  commentType: InputMaybe<Scalars['String']['input']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn: InputMaybe<Scalars['String']['input']>;
  /** Content object author ID to limit results by. */
  contentAuthor: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId: InputMaybe<Scalars['ID']['input']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName: InputMaybe<Scalars['String']['input']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent: InputMaybe<Scalars['Int']['input']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Karma score to retrieve matching comments for. */
  karma: InputMaybe<Scalars['Int']['input']>;
  /** The cardinality of the order of the connection */
  order: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent: InputMaybe<Scalars['Int']['input']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Comment status to limit results by. */
  status: InputMaybe<Scalars['String']['input']>;
  /** Include comments for a specific user ID. */
  userId: InputMaybe<Scalars['ID']['input']>;
};

/** Connection between the Item type and the item type */
export type ItemToItemConnection = Connection & ItemConnection & {
  __typename?: 'ItemToItemConnection';
  /** Edges for the ItemToItemConnection connection */
  edges: Array<ItemToItemConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Item>;
  /** Information about pagination in a connection. */
  pageInfo: ItemToItemConnectionPageInfo;
};

/** An edge in a connection */
export type ItemToItemConnectionEdge = Edge & ItemConnectionEdge & {
  __typename?: 'ItemToItemConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated This content type is not hierarchical and typically will not have ancestors
   */
  cursor: Maybe<Scalars['String']['output']>;
  /**
   * The item at the end of the edge
   * @deprecated This content type is not hierarchical and typically will not have ancestors
   */
  node: Item;
};

/** Page Info on the &quot;ItemToItemConnection&quot; */
export type ItemToItemConnectionPageInfo = ItemConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'ItemToItemConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Connection between the Item type and the itemType type */
export type ItemToItemTypeConnection = Connection & ItemTypeConnection & {
  __typename?: 'ItemToItemTypeConnection';
  /** Edges for the ItemToItemTypeConnection connection */
  edges: Array<ItemToItemTypeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ItemType>;
  /** Information about pagination in a connection. */
  pageInfo: ItemToItemTypeConnectionPageInfo;
};

/** An edge in a connection */
export type ItemToItemTypeConnectionEdge = Edge & ItemTypeConnectionEdge & {
  __typename?: 'ItemToItemTypeConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: ItemType;
};

/** Page Info on the &quot;ItemToItemTypeConnection&quot; */
export type ItemToItemTypeConnectionPageInfo = ItemTypeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'ItemToItemTypeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the ItemToItemTypeConnection connection */
export type ItemToItemTypeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache: InputMaybe<Scalars['Boolean']['input']>;
};

/** Connection between the Item type and the item type */
export type ItemToParentConnectionEdge = Edge & ItemConnectionEdge & OneToOneConnection & {
  __typename?: 'ItemToParentConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /**
   * The node of the connection, without the edges
   * @deprecated This content type is not hierarchical and typically will not have a parent
   */
  node: Item;
};

/** Connection between the Item type and the item type */
export type ItemToPreviewConnectionEdge = Edge & ItemConnectionEdge & OneToOneConnection & {
  __typename?: 'ItemToPreviewConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  node: Item;
};

/** Connection between the Item type and the item type */
export type ItemToRevisionConnection = Connection & ItemConnection & {
  __typename?: 'ItemToRevisionConnection';
  /** Edges for the ItemToRevisionConnection connection */
  edges: Array<ItemToRevisionConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Item>;
  /** Information about pagination in a connection. */
  pageInfo: ItemToRevisionConnectionPageInfo;
};

/** An edge in a connection */
export type ItemToRevisionConnectionEdge = Edge & ItemConnectionEdge & {
  __typename?: 'ItemToRevisionConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Item;
};

/** Page Info on the &quot;ItemToRevisionConnection&quot; */
export type ItemToRevisionConnectionPageInfo = ItemConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'ItemToRevisionConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the ItemToRevisionConnection connection */
export type ItemToRevisionConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the Item type and the TermNode type */
export type ItemToTermNodeConnection = Connection & TermNodeConnection & {
  __typename?: 'ItemToTermNodeConnection';
  /** Edges for the ItemToTermNodeConnection connection */
  edges: Array<ItemToTermNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<TermNode>;
  /** Information about pagination in a connection. */
  pageInfo: ItemToTermNodeConnectionPageInfo;
};

/** An edge in a connection */
export type ItemToTermNodeConnectionEdge = Edge & TermNodeConnectionEdge & {
  __typename?: 'ItemToTermNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: TermNode;
};

/** Page Info on the &quot;ItemToTermNodeConnection&quot; */
export type ItemToTermNodeConnectionPageInfo = PageInfo & TermNodeConnectionPageInfo & WpPageInfo & {
  __typename?: 'ItemToTermNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the ItemToTermNodeConnection connection */
export type ItemToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The Taxonomy to filter terms by */
  taxonomies: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache: InputMaybe<Scalars['Boolean']['input']>;
};

/** The itemType type */
export type ItemType = DatabaseIdentifier & HierarchicalNode & HierarchicalTermNode & MenuItemLinkable & Node & TermNode & UniformResourceIdentifiable & {
  __typename?: 'ItemType';
  /** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors: Maybe<ItemTypeToAncestorsItemTypeConnection>;
  /** Connection between the itemType type and its children itemTypes. */
  children: Maybe<ItemTypeToItemTypeConnection>;
  /** Connection between the ItemType type and the ContentNode type */
  contentNodes: Maybe<ItemTypeToContentNodeConnection>;
  /** The number of objects connected to the object */
  count: Maybe<Scalars['Int']['output']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** The description of the object */
  description: Maybe<Scalars['String']['output']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The globally unique ID for the object */
  id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is restricted from the current viewer */
  isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  itemTypeId: Maybe<Scalars['Int']['output']>;
  /** Connection between the ItemType type and the item type */
  items: Maybe<ItemTypeToItemConnection>;
  /** The link to the term */
  link: Maybe<Scalars['String']['output']>;
  /** The human friendly name of the object. */
  name: Maybe<Scalars['String']['output']>;
  /** Connection between the itemType type and its parent itemType. */
  parent: Maybe<ItemTypeToParentItemTypeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the parent node. */
  parentId: Maybe<Scalars['ID']['output']>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug: Maybe<Scalars['String']['output']>;
  /** Connection between the ItemType type and the Taxonomy type */
  taxonomy: Maybe<ItemTypeToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName: Maybe<Scalars['String']['output']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId: Maybe<Scalars['Int']['output']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId: Maybe<Scalars['Int']['output']>;
  /** The unique resource identifier path */
  uri: Maybe<Scalars['String']['output']>;
};


/** The itemType type */
export type ItemTypeAncestorsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The itemType type */
export type ItemTypeChildrenArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ItemTypeToItemTypeConnectionWhereArgs>;
};


/** The itemType type */
export type ItemTypeContentNodesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ItemTypeToContentNodeConnectionWhereArgs>;
};


/** The itemType type */
export type ItemTypeEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The itemType type */
export type ItemTypeEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The itemType type */
export type ItemTypeItemsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<ItemTypeToItemConnectionWhereArgs>;
};

/** Connection to itemType Nodes */
export type ItemTypeConnection = {
  /** A list of edges (relational context) between RootQuery and connected itemType Nodes */
  edges: Array<ItemTypeConnectionEdge>;
  /** A list of connected itemType Nodes */
  nodes: Array<ItemType>;
  /** Information about pagination in a connection. */
  pageInfo: ItemTypeConnectionPageInfo;
};

/** Edge between a Node and a connected itemType */
export type ItemTypeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected itemType Node */
  node: ItemType;
};

/** Page Info on the connected ItemTypeConnectionEdge */
export type ItemTypeConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ItemTypeIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the ItemType type and the itemType type */
export type ItemTypeToAncestorsItemTypeConnection = Connection & ItemTypeConnection & {
  __typename?: 'ItemTypeToAncestorsItemTypeConnection';
  /** Edges for the ItemTypeToAncestorsItemTypeConnection connection */
  edges: Array<ItemTypeToAncestorsItemTypeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ItemType>;
  /** Information about pagination in a connection. */
  pageInfo: ItemTypeToAncestorsItemTypeConnectionPageInfo;
};

/** An edge in a connection */
export type ItemTypeToAncestorsItemTypeConnectionEdge = Edge & ItemTypeConnectionEdge & {
  __typename?: 'ItemTypeToAncestorsItemTypeConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: ItemType;
};

/** Page Info on the &quot;ItemTypeToAncestorsItemTypeConnection&quot; */
export type ItemTypeToAncestorsItemTypeConnectionPageInfo = ItemTypeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'ItemTypeToAncestorsItemTypeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Connection between the ItemType type and the ContentNode type */
export type ItemTypeToContentNodeConnection = Connection & ContentNodeConnection & {
  __typename?: 'ItemTypeToContentNodeConnection';
  /** Edges for the ItemTypeToContentNodeConnection connection */
  edges: Array<ItemTypeToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: ItemTypeToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type ItemTypeToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'ItemTypeToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;ItemTypeToContentNodeConnection&quot; */
export type ItemTypeToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'ItemTypeToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the ItemTypeToContentNodeConnection connection */
export type ItemTypeToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes: InputMaybe<Array<InputMaybe<ContentTypesOfItemTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the ItemType type and the item type */
export type ItemTypeToItemConnection = Connection & ItemConnection & {
  __typename?: 'ItemTypeToItemConnection';
  /** Edges for the ItemTypeToItemConnection connection */
  edges: Array<ItemTypeToItemConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Item>;
  /** Information about pagination in a connection. */
  pageInfo: ItemTypeToItemConnectionPageInfo;
};

/** An edge in a connection */
export type ItemTypeToItemConnectionEdge = Edge & ItemConnectionEdge & {
  __typename?: 'ItemTypeToItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Item;
};

/** Page Info on the &quot;ItemTypeToItemConnection&quot; */
export type ItemTypeToItemConnectionPageInfo = ItemConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'ItemTypeToItemConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the ItemTypeToItemConnection connection */
export type ItemTypeToItemConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the ItemType type and the itemType type */
export type ItemTypeToItemTypeConnection = Connection & ItemTypeConnection & {
  __typename?: 'ItemTypeToItemTypeConnection';
  /** Edges for the ItemTypeToItemTypeConnection connection */
  edges: Array<ItemTypeToItemTypeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ItemType>;
  /** Information about pagination in a connection. */
  pageInfo: ItemTypeToItemTypeConnectionPageInfo;
};

/** An edge in a connection */
export type ItemTypeToItemTypeConnectionEdge = Edge & ItemTypeConnectionEdge & {
  __typename?: 'ItemTypeToItemTypeConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: ItemType;
};

/** Page Info on the &quot;ItemTypeToItemTypeConnection&quot; */
export type ItemTypeToItemTypeConnectionPageInfo = ItemTypeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'ItemTypeToItemTypeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the ItemTypeToItemTypeConnection connection */
export type ItemTypeToItemTypeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache: InputMaybe<Scalars['Boolean']['input']>;
};

/** Connection between the ItemType type and the itemType type */
export type ItemTypeToParentItemTypeConnectionEdge = Edge & ItemTypeConnectionEdge & OneToOneConnection & {
  __typename?: 'ItemTypeToParentItemTypeConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  node: ItemType;
};

/** Connection between the ItemType type and the Taxonomy type */
export type ItemTypeToTaxonomyConnectionEdge = Edge & OneToOneConnection & TaxonomyConnectionEdge & {
  __typename?: 'ItemTypeToTaxonomyConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  node: Taxonomy;
};

/** Input for the loginWithCookies mutation. */
export type LoginWithCookiesInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** Input your user/e-mail. */
  login: Scalars['String']['input'];
  /** Input your password. */
  password: Scalars['String']['input'];
  /** Whether to "remember" the user. Increases the time that the cookie will be kept. Default false. */
  rememberMe: InputMaybe<Scalars['Boolean']['input']>;
};

/** The payload for the loginWithCookies mutation. */
export type LoginWithCookiesPayload = {
  __typename?: 'LoginWithCookiesPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** Login operation status */
  status: Maybe<Scalars['String']['output']>;
};

/** Input for the logout mutation. */
export type LogoutInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the logout mutation. */
export type LogoutPayload = {
  __typename?: 'LogoutPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** Logout operation status */
  status: Maybe<Scalars['String']['output']>;
};

/** File details for a Media Item */
export type MediaDetails = {
  __typename?: 'MediaDetails';
  /** The filename of the mediaItem */
  file: Maybe<Scalars['String']['output']>;
  /** The height of the mediaItem */
  height: Maybe<Scalars['Int']['output']>;
  /** Meta information associated with the mediaItem */
  meta: Maybe<MediaItemMeta>;
  /** The available sizes of the mediaItem */
  sizes: Maybe<Array<Maybe<MediaSize>>>;
  /** The width of the mediaItem */
  width: Maybe<Scalars['Int']['output']>;
};


/** File details for a Media Item */
export type MediaDetailsSizesArgs = {
  exclude: InputMaybe<Array<InputMaybe<MediaItemSizeEnum>>>;
  include: InputMaybe<Array<InputMaybe<MediaItemSizeEnum>>>;
};

/** The mediaItem type */
export type MediaItem = ContentNode & DatabaseIdentifier & HierarchicalContentNode & HierarchicalNode & Node & NodeWithAuthor & NodeWithComments & NodeWithTemplate & NodeWithTitle & UniformResourceIdentifiable & WithAcfGuideFields & {
  __typename?: 'MediaItem';
  /** Alternative text to display when resource is not displayed */
  altText: Maybe<Scalars['String']['output']>;
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the NodeWithAuthor type and the User type */
  author: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the author of the node */
  authorId: Maybe<Scalars['ID']['output']>;
  /** The caption for the resource */
  caption: Maybe<Scalars['String']['output']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  children: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount: Maybe<Scalars['Int']['output']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus: Maybe<Scalars['String']['output']>;
  /** Connection between the MediaItem type and the Comment type */
  comments: Maybe<MediaItemToCommentConnection>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String']['output'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** Post publishing date. */
  date: Maybe<Scalars['String']['output']>;
  /** The publishing date set in GMT. */
  dateGmt: Maybe<Scalars['String']['output']>;
  /** Description of the image (stored as post_content) */
  description: Maybe<Scalars['String']['output']>;
  /** The desired slug of the post */
  desiredSlug: Maybe<Scalars['String']['output']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure: Maybe<Scalars['String']['output']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The filesize in bytes of the resource */
  fileSize: Maybe<Scalars['Int']['output']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid: Maybe<Scalars['String']['output']>;
  /** Fields of the GuideFields ACF Field Group */
  guideFields: Maybe<GuideFields>;
  /** Whether the attachment object is password protected. */
  hasPassword: Maybe<Scalars['Boolean']['output']>;
  /** The globally unique identifier of the attachment object. */
  id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is a node in the preview state */
  isPreview: Maybe<Scalars['Boolean']['output']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** The user that most recently edited the node */
  lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link: Maybe<Scalars['String']['output']>;
  /** Details about the mediaItem */
  mediaDetails: Maybe<MediaDetails>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  mediaItemId: Scalars['Int']['output'];
  /** Url of the mediaItem */
  mediaItemUrl: Maybe<Scalars['String']['output']>;
  /** Type of resource */
  mediaType: Maybe<Scalars['String']['output']>;
  /** The mime type of the mediaItem */
  mimeType: Maybe<Scalars['String']['output']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified: Maybe<Scalars['String']['output']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt: Maybe<Scalars['String']['output']>;
  /** The parent of the node. The parent object can be of various types */
  parent: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the parent node. */
  parentId: Maybe<Scalars['ID']['output']>;
  /** The password for the attachment object. */
  password: Maybe<Scalars['String']['output']>;
  /** The database id of the preview node */
  previewRevisionDatabaseId: Maybe<Scalars['Int']['output']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId: Maybe<Scalars['ID']['output']>;
  /** The sizes attribute value for an image. */
  sizes: Maybe<Scalars['String']['output']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug: Maybe<Scalars['String']['output']>;
  /** Url of the mediaItem */
  sourceUrl: Maybe<Scalars['String']['output']>;
  /** The srcset attribute specifies the URL of the image to use in different situations. It is a comma separated string of urls and their widths. */
  srcSet: Maybe<Scalars['String']['output']>;
  /** The current status of the object */
  status: Maybe<Scalars['String']['output']>;
  /** The template assigned to a node of content */
  template: Maybe<ContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title: Maybe<Scalars['String']['output']>;
  /** The unique resource identifier path */
  uri: Maybe<Scalars['String']['output']>;
};


/** The mediaItem type */
export type MediaItemAncestorsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** The mediaItem type */
export type MediaItemCaptionArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The mediaItem type */
export type MediaItemChildrenArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


/** The mediaItem type */
export type MediaItemCommentsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<MediaItemToCommentConnectionWhereArgs>;
};


/** The mediaItem type */
export type MediaItemDescriptionArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The mediaItem type */
export type MediaItemEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The mediaItem type */
export type MediaItemEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The mediaItem type */
export type MediaItemFileSizeArgs = {
  size: InputMaybe<MediaItemSizeEnum>;
};


/** The mediaItem type */
export type MediaItemSizesArgs = {
  size: InputMaybe<MediaItemSizeEnum>;
};


/** The mediaItem type */
export type MediaItemSourceUrlArgs = {
  size: InputMaybe<MediaItemSizeEnum>;
};


/** The mediaItem type */
export type MediaItemSrcSetArgs = {
  size: InputMaybe<MediaItemSizeEnum>;
};


/** The mediaItem type */
export type MediaItemTitleArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Connection to mediaItem Nodes */
export type MediaItemConnection = {
  /** A list of edges (relational context) between RootQuery and connected mediaItem Nodes */
  edges: Array<MediaItemConnectionEdge>;
  /** A list of connected mediaItem Nodes */
  nodes: Array<MediaItem>;
  /** Information about pagination in a connection. */
  pageInfo: MediaItemConnectionPageInfo;
};

/** Edge between a Node and a connected mediaItem */
export type MediaItemConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected mediaItem Node */
  node: MediaItem;
};

/** Page Info on the connected MediaItemConnectionEdge */
export type MediaItemConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum MediaItemIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a media item by its source url */
  SourceUrl = 'SOURCE_URL',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Meta connected to a MediaItem */
export type MediaItemMeta = {
  __typename?: 'MediaItemMeta';
  /** Aperture measurement of the media item. */
  aperture: Maybe<Scalars['Float']['output']>;
  /** Information about the camera used to create the media item. */
  camera: Maybe<Scalars['String']['output']>;
  /** The text string description associated with the media item. */
  caption: Maybe<Scalars['String']['output']>;
  /** Copyright information associated with the media item. */
  copyright: Maybe<Scalars['String']['output']>;
  /** The date/time when the media was created. */
  createdTimestamp: Maybe<Scalars['Int']['output']>;
  /** The original creator of the media item. */
  credit: Maybe<Scalars['String']['output']>;
  /** The focal length value of the media item. */
  focalLength: Maybe<Scalars['Float']['output']>;
  /** The ISO (International Organization for Standardization) value of the media item. */
  iso: Maybe<Scalars['Int']['output']>;
  /** List of keywords used to describe or identfy the media item. */
  keywords: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The vertical or horizontal aspect of the media item. */
  orientation: Maybe<Scalars['String']['output']>;
  /** The shutter speed information of the media item. */
  shutterSpeed: Maybe<Scalars['Float']['output']>;
  /** A useful title for the media item. */
  title: Maybe<Scalars['String']['output']>;
};

/** The size of the media item object. */
export enum MediaItemSizeEnum {
  /** MediaItem with the large size */
  Large = 'LARGE',
  /** MediaItem with the medium size */
  Medium = 'MEDIUM',
  /** MediaItem with the medium_large size */
  MediumLarge = 'MEDIUM_LARGE',
  /** MediaItem with the thumbnail size */
  Thumbnail = 'THUMBNAIL',
  /** MediaItem with the 1536x1536 size */
  '1536X1536' = '_1536X1536',
  /** MediaItem with the 2048x2048 size */
  '2048X2048' = '_2048X2048'
}

/** The status of the media item object. */
export enum MediaItemStatusEnum {
  /** Objects with the auto-draft status */
  AutoDraft = 'AUTO_DRAFT',
  /** Objects with the inherit status */
  Inherit = 'INHERIT',
  /** Objects with the private status */
  Private = 'PRIVATE',
  /** Objects with the trash status */
  Trash = 'TRASH'
}

/** Connection between the MediaItem type and the Comment type */
export type MediaItemToCommentConnection = CommentConnection & Connection & {
  __typename?: 'MediaItemToCommentConnection';
  /** Edges for the MediaItemToCommentConnection connection */
  edges: Array<MediaItemToCommentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Comment>;
  /** Information about pagination in a connection. */
  pageInfo: MediaItemToCommentConnectionPageInfo;
};

/** An edge in a connection */
export type MediaItemToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  __typename?: 'MediaItemToCommentConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Comment;
};

/** Page Info on the &quot;MediaItemToCommentConnection&quot; */
export type MediaItemToCommentConnectionPageInfo = CommentConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'MediaItemToCommentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the MediaItemToCommentConnection connection */
export type MediaItemToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail: InputMaybe<Scalars['String']['input']>;
  /** Array of author IDs to include comments for. */
  authorIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Comment author URL. */
  authorUrl: InputMaybe<Scalars['String']['input']>;
  /** Array of comment IDs to include. */
  commentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Include comments of a given type. */
  commentType: InputMaybe<Scalars['String']['input']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn: InputMaybe<Scalars['String']['input']>;
  /** Content object author ID to limit results by. */
  contentAuthor: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId: InputMaybe<Scalars['ID']['input']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName: InputMaybe<Scalars['String']['input']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent: InputMaybe<Scalars['Int']['input']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Karma score to retrieve matching comments for. */
  karma: InputMaybe<Scalars['Int']['input']>;
  /** The cardinality of the order of the connection */
  order: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent: InputMaybe<Scalars['Int']['input']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Comment status to limit results by. */
  status: InputMaybe<Scalars['String']['input']>;
  /** Include comments for a specific user ID. */
  userId: InputMaybe<Scalars['ID']['input']>;
};

/** Details of an available size for a media item */
export type MediaSize = {
  __typename?: 'MediaSize';
  /** The filename of the referenced size */
  file: Maybe<Scalars['String']['output']>;
  /** The filesize of the resource */
  fileSize: Maybe<Scalars['Int']['output']>;
  /** The height of the referenced size */
  height: Maybe<Scalars['String']['output']>;
  /** The mime type of the referenced size */
  mimeType: Maybe<Scalars['String']['output']>;
  /** The referenced size name */
  name: Maybe<Scalars['String']['output']>;
  /** The url of the referenced size */
  sourceUrl: Maybe<Scalars['String']['output']>;
  /** The width of the referenced size */
  width: Maybe<Scalars['String']['output']>;
};

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type Menu = DatabaseIdentifier & Node & {
  __typename?: 'Menu';
  /** The number of items in the menu */
  count: Maybe<Scalars['Int']['output']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** The globally unique identifier of the nav menu object. */
  id: Scalars['ID']['output'];
  /** Whether the object is restricted from the current viewer */
  isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** The locations a menu is assigned to */
  locations: Maybe<Array<Maybe<MenuLocationEnum>>>;
  /**
   * WP ID of the nav menu.
   * @deprecated Deprecated in favor of the databaseId field
   */
  menuId: Maybe<Scalars['Int']['output']>;
  /** Connection between the Menu type and the MenuItem type */
  menuItems: Maybe<MenuToMenuItemConnection>;
  /** Display name of the menu. Equivalent to WP_Term-&gt;name. */
  name: Maybe<Scalars['String']['output']>;
  /** The url friendly name of the menu. Equivalent to WP_Term-&gt;slug */
  slug: Maybe<Scalars['String']['output']>;
};


/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type MenuMenuItemsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<MenuToMenuItemConnectionWhereArgs>;
};

/** Connection to Menu Nodes */
export type MenuConnection = {
  /** A list of edges (relational context) between RootQuery and connected Menu Nodes */
  edges: Array<MenuConnectionEdge>;
  /** A list of connected Menu Nodes */
  nodes: Array<Menu>;
  /** Information about pagination in a connection. */
  pageInfo: MenuConnectionPageInfo;
};

/** Edge between a Node and a connected Menu */
export type MenuConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected Menu Node */
  node: Menu;
};

/** Page Info on the connected MenuConnectionEdge */
export type MenuConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItem = DatabaseIdentifier & Node & {
  __typename?: 'MenuItem';
  /** Connection between the MenuItem type and the MenuItem type */
  childItems: Maybe<MenuItemToMenuItemConnection>;
  /** Connection from MenuItem to it&#039;s connected node */
  connectedNode: Maybe<MenuItemToMenuItemLinkableConnectionEdge>;
  /**
   * The object connected to this menu item.
   * @deprecated Deprecated in favor of the connectedNode field
   */
  connectedObject: Maybe<MenuItemObjectUnion>;
  /** Class attribute for the menu item link */
  cssClasses: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** Description of the menu item. */
  description: Maybe<Scalars['String']['output']>;
  /** The globally unique identifier of the nav menu item object. */
  id: Scalars['ID']['output'];
  /** Whether the object is restricted from the current viewer */
  isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Label or title of the menu item. */
  label: Maybe<Scalars['String']['output']>;
  /** Link relationship (XFN) of the menu item. */
  linkRelationship: Maybe<Scalars['String']['output']>;
  /** The locations the menu item&#039;s Menu is assigned to */
  locations: Maybe<Array<Maybe<MenuLocationEnum>>>;
  /** The Menu a MenuItem is part of */
  menu: Maybe<MenuItemToMenuConnectionEdge>;
  /**
   * WP ID of the menu item.
   * @deprecated Deprecated in favor of the databaseId field
   */
  menuItemId: Maybe<Scalars['Int']['output']>;
  /** Menu item order */
  order: Maybe<Scalars['Int']['output']>;
  /** The database id of the parent menu item or null if it is the root */
  parentDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the parent nav menu item object. */
  parentId: Maybe<Scalars['ID']['output']>;
  /** Path for the resource. Relative path for internal resources. Absolute path for external resources. */
  path: Maybe<Scalars['String']['output']>;
  /** Target attribute for the menu item link. */
  target: Maybe<Scalars['String']['output']>;
  /** Title attribute for the menu item link */
  title: Maybe<Scalars['String']['output']>;
  /** The uri of the resource the menu item links to */
  uri: Maybe<Scalars['String']['output']>;
  /** URL or destination of the menu item. */
  url: Maybe<Scalars['String']['output']>;
};


/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItemChildItemsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<MenuItemToMenuItemConnectionWhereArgs>;
};

/** Connection to MenuItem Nodes */
export type MenuItemConnection = {
  /** A list of edges (relational context) between RootQuery and connected MenuItem Nodes */
  edges: Array<MenuItemConnectionEdge>;
  /** A list of connected MenuItem Nodes */
  nodes: Array<MenuItem>;
  /** Information about pagination in a connection. */
  pageInfo: MenuItemConnectionPageInfo;
};

/** Edge between a Node and a connected MenuItem */
export type MenuItemConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected MenuItem Node */
  node: MenuItem;
};

/** Page Info on the connected MenuItemConnectionEdge */
export type MenuItemConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Nodes that can be linked to as Menu Items */
export type MenuItemLinkable = {
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** The globally unique ID for the object */
  id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean']['output'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** The unique resource identifier path */
  uri: Maybe<Scalars['String']['output']>;
};

/** Edge between a Node and a connected MenuItemLinkable */
export type MenuItemLinkableConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected MenuItemLinkable Node */
  node: MenuItemLinkable;
};

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export enum MenuItemNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID'
}

/** Deprecated in favor of MenuItemLinkeable Interface */
export type MenuItemObjectUnion = Category | Collection | Hero | Item | ItemType | Page | Post | Tag | Team;

/** Connection between the MenuItem type and the Menu type */
export type MenuItemToMenuConnectionEdge = Edge & MenuConnectionEdge & OneToOneConnection & {
  __typename?: 'MenuItemToMenuConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  node: Menu;
};

/** Connection between the MenuItem type and the MenuItem type */
export type MenuItemToMenuItemConnection = Connection & MenuItemConnection & {
  __typename?: 'MenuItemToMenuItemConnection';
  /** Edges for the MenuItemToMenuItemConnection connection */
  edges: Array<MenuItemToMenuItemConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<MenuItem>;
  /** Information about pagination in a connection. */
  pageInfo: MenuItemToMenuItemConnectionPageInfo;
};

/** An edge in a connection */
export type MenuItemToMenuItemConnectionEdge = Edge & MenuItemConnectionEdge & {
  __typename?: 'MenuItemToMenuItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: MenuItem;
};

/** Page Info on the &quot;MenuItemToMenuItemConnection&quot; */
export type MenuItemToMenuItemConnectionPageInfo = MenuItemConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'MenuItemToMenuItemConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export type MenuItemToMenuItemConnectionWhereArgs = {
  /** The database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** The menu location for the menu being queried */
  location: InputMaybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  parentDatabaseId: InputMaybe<Scalars['Int']['input']>;
  /** The ID of the parent menu object */
  parentId: InputMaybe<Scalars['ID']['input']>;
};

/** Connection between the MenuItem type and the MenuItemLinkable type */
export type MenuItemToMenuItemLinkableConnectionEdge = Edge & MenuItemLinkableConnectionEdge & OneToOneConnection & {
  __typename?: 'MenuItemToMenuItemLinkableConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  node: MenuItemLinkable;
};

/** Registered menu locations */
export enum MenuLocationEnum {
  /** Empty menu location */
  Empty = 'EMPTY'
}

/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export enum MenuNodeIdTypeEnum {
  /** Identify a menu node by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a menu node by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a menu node by the slug of menu location to which it is assigned */
  Location = 'LOCATION',
  /** Identify a menu node by its name */
  Name = 'NAME',
  /** Identify a menu node by its slug */
  Slug = 'SLUG'
}

/** Connection between the Menu type and the MenuItem type */
export type MenuToMenuItemConnection = Connection & MenuItemConnection & {
  __typename?: 'MenuToMenuItemConnection';
  /** Edges for the MenuToMenuItemConnection connection */
  edges: Array<MenuToMenuItemConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<MenuItem>;
  /** Information about pagination in a connection. */
  pageInfo: MenuToMenuItemConnectionPageInfo;
};

/** An edge in a connection */
export type MenuToMenuItemConnectionEdge = Edge & MenuItemConnectionEdge & {
  __typename?: 'MenuToMenuItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: MenuItem;
};

/** Page Info on the &quot;MenuToMenuItemConnection&quot; */
export type MenuToMenuItemConnectionPageInfo = MenuItemConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'MenuToMenuItemConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the MenuToMenuItemConnection connection */
export type MenuToMenuItemConnectionWhereArgs = {
  /** The database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** The menu location for the menu being queried */
  location: InputMaybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  parentDatabaseId: InputMaybe<Scalars['Int']['input']>;
  /** The ID of the parent menu object */
  parentId: InputMaybe<Scalars['ID']['input']>;
};

/** The MimeType of the object */
export enum MimeTypeEnum {
  /** application/java mime type. */
  ApplicationJava = 'APPLICATION_JAVA',
  /** application/msword mime type. */
  ApplicationMsword = 'APPLICATION_MSWORD',
  /** application/octet-stream mime type. */
  ApplicationOctetStream = 'APPLICATION_OCTET_STREAM',
  /** application/onenote mime type. */
  ApplicationOnenote = 'APPLICATION_ONENOTE',
  /** application/oxps mime type. */
  ApplicationOxps = 'APPLICATION_OXPS',
  /** application/pdf mime type. */
  ApplicationPdf = 'APPLICATION_PDF',
  /** application/rar mime type. */
  ApplicationRar = 'APPLICATION_RAR',
  /** application/rtf mime type. */
  ApplicationRtf = 'APPLICATION_RTF',
  /** application/ttaf+xml mime type. */
  ApplicationTtafXml = 'APPLICATION_TTAF_XML',
  /** application/vnd.apple.keynote mime type. */
  ApplicationVndAppleKeynote = 'APPLICATION_VND_APPLE_KEYNOTE',
  /** application/vnd.apple.numbers mime type. */
  ApplicationVndAppleNumbers = 'APPLICATION_VND_APPLE_NUMBERS',
  /** application/vnd.apple.pages mime type. */
  ApplicationVndApplePages = 'APPLICATION_VND_APPLE_PAGES',
  /** application/vnd.ms-access mime type. */
  ApplicationVndMsAccess = 'APPLICATION_VND_MS_ACCESS',
  /** application/vnd.ms-excel mime type. */
  ApplicationVndMsExcel = 'APPLICATION_VND_MS_EXCEL',
  /** application/vnd.ms-excel.addin.macroEnabled.12 mime type. */
  ApplicationVndMsExcelAddinMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12',
  /** application/vnd.ms-excel.sheet.binary.macroEnabled.12 mime type. */
  ApplicationVndMsExcelSheetBinaryMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12',
  /** application/vnd.ms-excel.sheet.macroEnabled.12 mime type. */
  ApplicationVndMsExcelSheetMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12',
  /** application/vnd.ms-excel.template.macroEnabled.12 mime type. */
  ApplicationVndMsExcelTemplateMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12',
  /** application/vnd.ms-powerpoint mime type. */
  ApplicationVndMsPowerpoint = 'APPLICATION_VND_MS_POWERPOINT',
  /** application/vnd.ms-powerpoint.addin.macroEnabled.12 mime type. */
  ApplicationVndMsPowerpointAddinMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12',
  /** application/vnd.ms-powerpoint.presentation.macroEnabled.12 mime type. */
  ApplicationVndMsPowerpointPresentationMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12',
  /** application/vnd.ms-powerpoint.slideshow.macroEnabled.12 mime type. */
  ApplicationVndMsPowerpointSlideshowMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12',
  /** application/vnd.ms-powerpoint.slide.macroEnabled.12 mime type. */
  ApplicationVndMsPowerpointSlideMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12',
  /** application/vnd.ms-powerpoint.template.macroEnabled.12 mime type. */
  ApplicationVndMsPowerpointTemplateMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12',
  /** application/vnd.ms-project mime type. */
  ApplicationVndMsProject = 'APPLICATION_VND_MS_PROJECT',
  /** application/vnd.ms-word.document.macroEnabled.12 mime type. */
  ApplicationVndMsWordDocumentMacroenabled_12 = 'APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12',
  /** application/vnd.ms-word.template.macroEnabled.12 mime type. */
  ApplicationVndMsWordTemplateMacroenabled_12 = 'APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12',
  /** application/vnd.ms-write mime type. */
  ApplicationVndMsWrite = 'APPLICATION_VND_MS_WRITE',
  /** application/vnd.ms-xpsdocument mime type. */
  ApplicationVndMsXpsdocument = 'APPLICATION_VND_MS_XPSDOCUMENT',
  /** application/vnd.oasis.opendocument.chart mime type. */
  ApplicationVndOasisOpendocumentChart = 'APPLICATION_VND_OASIS_OPENDOCUMENT_CHART',
  /** application/vnd.oasis.opendocument.database mime type. */
  ApplicationVndOasisOpendocumentDatabase = 'APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE',
  /** application/vnd.oasis.opendocument.formula mime type. */
  ApplicationVndOasisOpendocumentFormula = 'APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA',
  /** application/vnd.oasis.opendocument.graphics mime type. */
  ApplicationVndOasisOpendocumentGraphics = 'APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS',
  /** application/vnd.oasis.opendocument.presentation mime type. */
  ApplicationVndOasisOpendocumentPresentation = 'APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION',
  /** application/vnd.oasis.opendocument.spreadsheet mime type. */
  ApplicationVndOasisOpendocumentSpreadsheet = 'APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET',
  /** application/vnd.oasis.opendocument.text mime type. */
  ApplicationVndOasisOpendocumentText = 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT',
  /** application/vnd.openxmlformats-officedocument.presentationml.presentation mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION',
  /** application/vnd.openxmlformats-officedocument.presentationml.slide mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE',
  /** application/vnd.openxmlformats-officedocument.presentationml.slideshow mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW',
  /** application/vnd.openxmlformats-officedocument.presentationml.template mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE',
  /** application/vnd.openxmlformats-officedocument.spreadsheetml.sheet mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET',
  /** application/vnd.openxmlformats-officedocument.spreadsheetml.template mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE',
  /** application/vnd.openxmlformats-officedocument.wordprocessingml.document mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT',
  /** application/vnd.openxmlformats-officedocument.wordprocessingml.template mime type. */
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE',
  /** application/wordperfect mime type. */
  ApplicationWordperfect = 'APPLICATION_WORDPERFECT',
  /** application/x-7z-compressed mime type. */
  ApplicationX_7ZCompressed = 'APPLICATION_X_7Z_COMPRESSED',
  /** application/x-gzip mime type. */
  ApplicationXGzip = 'APPLICATION_X_GZIP',
  /** application/x-tar mime type. */
  ApplicationXTar = 'APPLICATION_X_TAR',
  /** application/zip mime type. */
  ApplicationZip = 'APPLICATION_ZIP',
  /** audio/aac mime type. */
  AudioAac = 'AUDIO_AAC',
  /** audio/flac mime type. */
  AudioFlac = 'AUDIO_FLAC',
  /** audio/midi mime type. */
  AudioMidi = 'AUDIO_MIDI',
  /** audio/mpeg mime type. */
  AudioMpeg = 'AUDIO_MPEG',
  /** audio/ogg mime type. */
  AudioOgg = 'AUDIO_OGG',
  /** audio/wav mime type. */
  AudioWav = 'AUDIO_WAV',
  /** audio/x-matroska mime type. */
  AudioXMatroska = 'AUDIO_X_MATROSKA',
  /** audio/x-ms-wax mime type. */
  AudioXMsWax = 'AUDIO_X_MS_WAX',
  /** audio/x-ms-wma mime type. */
  AudioXMsWma = 'AUDIO_X_MS_WMA',
  /** audio/x-realaudio mime type. */
  AudioXRealaudio = 'AUDIO_X_REALAUDIO',
  /** image/avif mime type. */
  ImageAvif = 'IMAGE_AVIF',
  /** image/bmp mime type. */
  ImageBmp = 'IMAGE_BMP',
  /** image/gif mime type. */
  ImageGif = 'IMAGE_GIF',
  /** image/heic mime type. */
  ImageHeic = 'IMAGE_HEIC',
  /** image/jpeg mime type. */
  ImageJpeg = 'IMAGE_JPEG',
  /** image/png mime type. */
  ImagePng = 'IMAGE_PNG',
  /** image/tiff mime type. */
  ImageTiff = 'IMAGE_TIFF',
  /** image/webp mime type. */
  ImageWebp = 'IMAGE_WEBP',
  /** image/x-icon mime type. */
  ImageXIcon = 'IMAGE_X_ICON',
  /** text/calendar mime type. */
  TextCalendar = 'TEXT_CALENDAR',
  /** text/css mime type. */
  TextCss = 'TEXT_CSS',
  /** text/csv mime type. */
  TextCsv = 'TEXT_CSV',
  /** text/plain mime type. */
  TextPlain = 'TEXT_PLAIN',
  /** text/richtext mime type. */
  TextRichtext = 'TEXT_RICHTEXT',
  /** text/tab-separated-values mime type. */
  TextTabSeparatedValues = 'TEXT_TAB_SEPARATED_VALUES',
  /** text/vtt mime type. */
  TextVtt = 'TEXT_VTT',
  /** video/3gpp mime type. */
  Video_3Gpp = 'VIDEO_3GPP',
  /** video/3gpp2 mime type. */
  Video_3Gpp2 = 'VIDEO_3GPP2',
  /** video/avi mime type. */
  VideoAvi = 'VIDEO_AVI',
  /** video/divx mime type. */
  VideoDivx = 'VIDEO_DIVX',
  /** video/mp4 mime type. */
  VideoMp4 = 'VIDEO_MP4',
  /** video/mpeg mime type. */
  VideoMpeg = 'VIDEO_MPEG',
  /** video/ogg mime type. */
  VideoOgg = 'VIDEO_OGG',
  /** video/quicktime mime type. */
  VideoQuicktime = 'VIDEO_QUICKTIME',
  /** video/webm mime type. */
  VideoWebm = 'VIDEO_WEBM',
  /** video/x-flv mime type. */
  VideoXFlv = 'VIDEO_X_FLV',
  /** video/x-matroska mime type. */
  VideoXMatroska = 'VIDEO_X_MATROSKA',
  /** video/x-ms-asf mime type. */
  VideoXMsAsf = 'VIDEO_X_MS_ASF',
  /** video/x-ms-wm mime type. */
  VideoXMsWm = 'VIDEO_X_MS_WM',
  /** video/x-ms-wmv mime type. */
  VideoXMsWmv = 'VIDEO_X_MS_WMV',
  /** video/x-ms-wmx mime type. */
  VideoXMsWmx = 'VIDEO_X_MS_WMX'
}

/** An object with an ID */
export type Node = {
  /** The globally unique ID for the object */
  id: Scalars['ID']['output'];
};

/** A node that can have an author assigned to it */
export type NodeWithAuthor = {
  /** Connection between the NodeWithAuthor type and the User type */
  author: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the author of the node */
  authorId: Maybe<Scalars['ID']['output']>;
  /** The globally unique ID for the object */
  id: Scalars['ID']['output'];
};

/** Connection between the NodeWithAuthor type and the User type */
export type NodeWithAuthorToUserConnectionEdge = Edge & OneToOneConnection & UserConnectionEdge & {
  __typename?: 'NodeWithAuthorToUserConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  node: User;
};

/** A node that can have comments associated with it */
export type NodeWithComments = {
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount: Maybe<Scalars['Int']['output']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus: Maybe<Scalars['String']['output']>;
  /** The globally unique ID for the object */
  id: Scalars['ID']['output'];
};

/** A node that supports the content editor */
export type NodeWithContentEditor = {
  /** The content of the post. */
  content: Maybe<Scalars['String']['output']>;
  /** The globally unique ID for the object */
  id: Scalars['ID']['output'];
};


/** A node that supports the content editor */
export type NodeWithContentEditorContentArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};

/** A node that can have an excerpt */
export type NodeWithExcerpt = {
  /** The excerpt of the post. */
  excerpt: Maybe<Scalars['String']['output']>;
  /** The globally unique ID for the object */
  id: Scalars['ID']['output'];
};


/** A node that can have an excerpt */
export type NodeWithExcerptExcerptArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};

/** A node that can have a featured image set */
export type NodeWithFeaturedImage = {
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId: Maybe<Scalars['Int']['output']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId: Maybe<Scalars['ID']['output']>;
  /** The globally unique ID for the object */
  id: Scalars['ID']['output'];
};

/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
export type NodeWithFeaturedImageToMediaItemConnectionEdge = Edge & MediaItemConnectionEdge & OneToOneConnection & {
  __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  node: MediaItem;
};

/** A node that can have page attributes */
export type NodeWithPageAttributes = {
  /** The globally unique ID for the object */
  id: Scalars['ID']['output'];
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder: Maybe<Scalars['Int']['output']>;
};

/** A node that can have revisions */
export type NodeWithRevisions = {
  /** The globally unique ID for the object */
  id: Scalars['ID']['output'];
  /** True if the node is a revision of another node */
  isRevision: Maybe<Scalars['Boolean']['output']>;
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  revisionOf: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
};

/** Connection between the NodeWithRevisions type and the ContentNode type */
export type NodeWithRevisionsToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & OneToOneConnection & {
  __typename?: 'NodeWithRevisionsToContentNodeConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  node: ContentNode;
};

/** A node that can have a template associated with it */
export type NodeWithTemplate = {
  /** The globally unique ID for the object */
  id: Scalars['ID']['output'];
  /** The template assigned to the node */
  template: Maybe<ContentTemplate>;
};

/** A node that NodeWith a title */
export type NodeWithTitle = {
  /** The globally unique ID for the object */
  id: Scalars['ID']['output'];
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title: Maybe<Scalars['String']['output']>;
};


/** A node that NodeWith a title */
export type NodeWithTitleTitleArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};

/** A node that can have trackbacks and pingbacks */
export type NodeWithTrackbacks = {
  /** The globally unique ID for the object */
  id: Scalars['ID']['output'];
  /** Whether the pings are open or closed for this particular post. */
  pingStatus: Maybe<Scalars['String']['output']>;
  /** URLs that have been pinged. */
  pinged: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** URLs queued to be pinged. */
  toPing: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

/** A singular connection from one Node to another, with support for relational data on the &quot;edge&quot; of the connection. */
export type OneToOneConnection = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected node */
  node: Node;
};

/** The cardinality of the connection order */
export enum OrderEnum {
  /** Sort the query result set in an ascending order */
  Asc = 'ASC',
  /** Sort the query result set in a descending order */
  Desc = 'DESC'
}

/** The page type */
export type Page = ContentNode & DatabaseIdentifier & HierarchicalContentNode & HierarchicalNode & MenuItemLinkable & Node & NodeWithAuthor & NodeWithComments & NodeWithContentEditor & NodeWithFeaturedImage & NodeWithPageAttributes & NodeWithRevisions & NodeWithTemplate & NodeWithTitle & Previewable & UniformResourceIdentifiable & WithAcfGuideFields & {
  __typename?: 'Page';
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors: Maybe<HierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the NodeWithAuthor type and the User type */
  author: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the author of the node */
  authorId: Maybe<Scalars['ID']['output']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  children: Maybe<HierarchicalContentNodeToContentNodeChildrenConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount: Maybe<Scalars['Int']['output']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus: Maybe<Scalars['String']['output']>;
  /** Connection between the Page type and the Comment type */
  comments: Maybe<PageToCommentConnection>;
  /** The content of the post. */
  content: Maybe<Scalars['String']['output']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String']['output'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** Post publishing date. */
  date: Maybe<Scalars['String']['output']>;
  /** The publishing date set in GMT. */
  dateGmt: Maybe<Scalars['String']['output']>;
  /** The desired slug of the post */
  desiredSlug: Maybe<Scalars['String']['output']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure: Maybe<Scalars['String']['output']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId: Maybe<Scalars['Int']['output']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId: Maybe<Scalars['ID']['output']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid: Maybe<Scalars['String']['output']>;
  /** Fields of the GuideFields ACF Field Group */
  guideFields: Maybe<GuideFields>;
  /** Whether the page object is password protected. */
  hasPassword: Maybe<Scalars['Boolean']['output']>;
  /** The globally unique identifier of the page object. */
  id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether this page is set to the static front page. */
  isFrontPage: Scalars['Boolean']['output'];
  /** Whether this page is set to the blog posts page. */
  isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is a node in the preview state */
  isPreview: Maybe<Scalars['Boolean']['output']>;
  /** Whether this page is set to the privacy page. */
  isPrivacyPage: Scalars['Boolean']['output'];
  /** Whether the object is restricted from the current viewer */
  isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** True if the node is a revision of another node */
  isRevision: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** The user that most recently edited the node */
  lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link: Maybe<Scalars['String']['output']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder: Maybe<Scalars['Int']['output']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified: Maybe<Scalars['String']['output']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt: Maybe<Scalars['String']['output']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  pageId: Scalars['Int']['output'];
  /** The parent of the node. The parent object can be of various types */
  parent: Maybe<HierarchicalContentNodeToParentContentNodeConnectionEdge>;
  /** Database id of the parent node */
  parentDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the parent node. */
  parentId: Maybe<Scalars['ID']['output']>;
  /** The password for the page object. */
  password: Maybe<Scalars['String']['output']>;
  /** Connection between the Page type and the page type */
  preview: Maybe<PageToPreviewConnectionEdge>;
  /** The database id of the preview node */
  previewRevisionDatabaseId: Maybe<Scalars['Int']['output']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId: Maybe<Scalars['ID']['output']>;
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  revisionOf: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
  /** Connection between the Page type and the page type */
  revisions: Maybe<PageToRevisionConnection>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug: Maybe<Scalars['String']['output']>;
  /** The current status of the object */
  status: Maybe<Scalars['String']['output']>;
  /** The template assigned to a node of content */
  template: Maybe<ContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title: Maybe<Scalars['String']['output']>;
  /** The unique resource identifier path */
  uri: Maybe<Scalars['String']['output']>;
};


/** The page type */
export type PageAncestorsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs>;
};


/** The page type */
export type PageChildrenArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs>;
};


/** The page type */
export type PageCommentsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PageToCommentConnectionWhereArgs>;
};


/** The page type */
export type PageContentArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The page type */
export type PageEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The page type */
export type PageEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The page type */
export type PageRevisionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PageToRevisionConnectionWhereArgs>;
};


/** The page type */
export type PageTitleArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Connection to page Nodes */
export type PageConnection = {
  /** A list of edges (relational context) between RootQuery and connected page Nodes */
  edges: Array<PageConnectionEdge>;
  /** A list of connected page Nodes */
  nodes: Array<Page>;
  /** Information about pagination in a connection. */
  pageInfo: PageConnectionPageInfo;
};

/** Edge between a Node and a connected page */
export type PageConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected page Node */
  node: Page;
};

/** Page Info on the connected PageConnectionEdge */
export type PageConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PageIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Connection between the Page type and the Comment type */
export type PageToCommentConnection = CommentConnection & Connection & {
  __typename?: 'PageToCommentConnection';
  /** Edges for the PageToCommentConnection connection */
  edges: Array<PageToCommentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Comment>;
  /** Information about pagination in a connection. */
  pageInfo: PageToCommentConnectionPageInfo;
};

/** An edge in a connection */
export type PageToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  __typename?: 'PageToCommentConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Comment;
};

/** Page Info on the &quot;PageToCommentConnection&quot; */
export type PageToCommentConnectionPageInfo = CommentConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'PageToCommentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the PageToCommentConnection connection */
export type PageToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail: InputMaybe<Scalars['String']['input']>;
  /** Array of author IDs to include comments for. */
  authorIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Comment author URL. */
  authorUrl: InputMaybe<Scalars['String']['input']>;
  /** Array of comment IDs to include. */
  commentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Include comments of a given type. */
  commentType: InputMaybe<Scalars['String']['input']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn: InputMaybe<Scalars['String']['input']>;
  /** Content object author ID to limit results by. */
  contentAuthor: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId: InputMaybe<Scalars['ID']['input']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName: InputMaybe<Scalars['String']['input']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent: InputMaybe<Scalars['Int']['input']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Karma score to retrieve matching comments for. */
  karma: InputMaybe<Scalars['Int']['input']>;
  /** The cardinality of the order of the connection */
  order: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent: InputMaybe<Scalars['Int']['input']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Comment status to limit results by. */
  status: InputMaybe<Scalars['String']['input']>;
  /** Include comments for a specific user ID. */
  userId: InputMaybe<Scalars['ID']['input']>;
};

/** Connection between the Page type and the page type */
export type PageToPreviewConnectionEdge = Edge & OneToOneConnection & PageConnectionEdge & {
  __typename?: 'PageToPreviewConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  node: Page;
};

/** Connection between the Page type and the page type */
export type PageToRevisionConnection = Connection & PageConnection & {
  __typename?: 'PageToRevisionConnection';
  /** Edges for the PageToRevisionConnection connection */
  edges: Array<PageToRevisionConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Page>;
  /** Information about pagination in a connection. */
  pageInfo: PageToRevisionConnectionPageInfo;
};

/** An edge in a connection */
export type PageToRevisionConnectionEdge = Edge & PageConnectionEdge & {
  __typename?: 'PageToRevisionConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Page;
};

/** Page Info on the &quot;PageToRevisionConnection&quot; */
export type PageToRevisionConnectionPageInfo = PageConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'PageToRevisionConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the PageToRevisionConnection connection */
export type PageToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** An plugin object */
export type Plugin = Node & {
  __typename?: 'Plugin';
  /** Name of the plugin author(s), may also be a company name. */
  author: Maybe<Scalars['String']['output']>;
  /** URI for the related author(s)/company website. */
  authorUri: Maybe<Scalars['String']['output']>;
  /** Description of the plugin. */
  description: Maybe<Scalars['String']['output']>;
  /** The globally unique identifier of the plugin object. */
  id: Scalars['ID']['output'];
  /** Whether the object is restricted from the current viewer */
  isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Display name of the plugin. */
  name: Maybe<Scalars['String']['output']>;
  /** Plugin path. */
  path: Maybe<Scalars['String']['output']>;
  /** URI for the plugin website. This is useful for directing users for support requests etc. */
  pluginUri: Maybe<Scalars['String']['output']>;
  /** Current version of the plugin. */
  version: Maybe<Scalars['String']['output']>;
};

/** Connection to Plugin Nodes */
export type PluginConnection = {
  /** A list of edges (relational context) between RootQuery and connected Plugin Nodes */
  edges: Array<PluginConnectionEdge>;
  /** A list of connected Plugin Nodes */
  nodes: Array<Plugin>;
  /** Information about pagination in a connection. */
  pageInfo: PluginConnectionPageInfo;
};

/** Edge between a Node and a connected Plugin */
export type PluginConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected Plugin Node */
  node: Plugin;
};

/** Page Info on the connected PluginConnectionEdge */
export type PluginConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** The status of the WordPress plugin. */
export enum PluginStatusEnum {
  /** The plugin is currently active. */
  Active = 'ACTIVE',
  /** The plugin is a drop-in plugin. */
  DropIn = 'DROP_IN',
  /** The plugin is currently inactive. */
  Inactive = 'INACTIVE',
  /** The plugin is a must-use plugin. */
  MustUse = 'MUST_USE',
  /** The plugin is technically active but was paused while loading. */
  Paused = 'PAUSED',
  /** The plugin was active recently. */
  RecentlyActive = 'RECENTLY_ACTIVE',
  /** The plugin has an upgrade available. */
  Upgrade = 'UPGRADE'
}

/** The post type */
export type Post = ContentNode & DatabaseIdentifier & MenuItemLinkable & Node & NodeWithAuthor & NodeWithComments & NodeWithContentEditor & NodeWithExcerpt & NodeWithFeaturedImage & NodeWithRevisions & NodeWithTemplate & NodeWithTitle & NodeWithTrackbacks & Previewable & UniformResourceIdentifiable & WithAcfGuideFields & {
  __typename?: 'Post';
  /**
   * The ancestors of the content node.
   * @deprecated This content type is not hierarchical and typically will not have ancestors
   */
  ancestors: Maybe<PostToPostConnection>;
  /** Connection between the NodeWithAuthor type and the User type */
  author: Maybe<NodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique identifier of the author of the node */
  authorId: Maybe<Scalars['ID']['output']>;
  /** Connection between the Post type and the category type */
  categories: Maybe<PostToCategoryConnection>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount: Maybe<Scalars['Int']['output']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus: Maybe<Scalars['String']['output']>;
  /** Connection between the Post type and the Comment type */
  comments: Maybe<PostToCommentConnection>;
  /** The content of the post. */
  content: Maybe<Scalars['String']['output']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String']['output'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** Post publishing date. */
  date: Maybe<Scalars['String']['output']>;
  /** The publishing date set in GMT. */
  dateGmt: Maybe<Scalars['String']['output']>;
  /** The desired slug of the post */
  desiredSlug: Maybe<Scalars['String']['output']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure: Maybe<Scalars['String']['output']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The excerpt of the post. */
  excerpt: Maybe<Scalars['String']['output']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage: Maybe<NodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId: Maybe<Scalars['Int']['output']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId: Maybe<Scalars['ID']['output']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid: Maybe<Scalars['String']['output']>;
  /** Fields of the GuideFields ACF Field Group */
  guideFields: Maybe<GuideFields>;
  /** Whether the post object is password protected. */
  hasPassword: Maybe<Scalars['Boolean']['output']>;
  /** The globally unique identifier of the post object. */
  id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is a node in the preview state */
  isPreview: Maybe<Scalars['Boolean']['output']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** True if the node is a revision of another node */
  isRevision: Maybe<Scalars['Boolean']['output']>;
  /** Whether this page is sticky */
  isSticky: Scalars['Boolean']['output'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** The user that most recently edited the node */
  lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link: Maybe<Scalars['String']['output']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified: Maybe<Scalars['String']['output']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt: Maybe<Scalars['String']['output']>;
  /**
   * The parent of the content node.
   * @deprecated This content type is not hierarchical and typically will not have a parent
   */
  parent: Maybe<PostToParentConnectionEdge>;
  /** The password for the post object. */
  password: Maybe<Scalars['String']['output']>;
  /** Whether the pings are open or closed for this particular post. */
  pingStatus: Maybe<Scalars['String']['output']>;
  /** URLs that have been pinged. */
  pinged: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Connection between the Post type and the postFormat type */
  postFormats: Maybe<PostToPostFormatConnection>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  postId: Scalars['Int']['output'];
  /** Connection between the Post type and the post type */
  preview: Maybe<PostToPreviewConnectionEdge>;
  /** The database id of the preview node */
  previewRevisionDatabaseId: Maybe<Scalars['Int']['output']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId: Maybe<Scalars['ID']['output']>;
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  revisionOf: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
  /** Connection between the Post type and the post type */
  revisions: Maybe<PostToRevisionConnection>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug: Maybe<Scalars['String']['output']>;
  /** The current status of the object */
  status: Maybe<Scalars['String']['output']>;
  /** Connection between the Post type and the tag type */
  tags: Maybe<PostToTagConnection>;
  /** The template assigned to the node */
  template: Maybe<ContentTemplate>;
  /** Connection between the Post type and the TermNode type */
  terms: Maybe<PostToTermNodeConnection>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title: Maybe<Scalars['String']['output']>;
  /** URLs queued to be pinged. */
  toPing: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The unique resource identifier path */
  uri: Maybe<Scalars['String']['output']>;
};


/** The post type */
export type PostAncestorsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The post type */
export type PostCategoriesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PostToCategoryConnectionWhereArgs>;
};


/** The post type */
export type PostCommentsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PostToCommentConnectionWhereArgs>;
};


/** The post type */
export type PostContentArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The post type */
export type PostEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The post type */
export type PostEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The post type */
export type PostExcerptArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The post type */
export type PostPostFormatsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PostToPostFormatConnectionWhereArgs>;
};


/** The post type */
export type PostRevisionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PostToRevisionConnectionWhereArgs>;
};


/** The post type */
export type PostTagsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PostToTagConnectionWhereArgs>;
};


/** The post type */
export type PostTermsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PostToTermNodeConnectionWhereArgs>;
};


/** The post type */
export type PostTitleArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Set relationships between the post to categories */
export type PostCategoriesInput = {
  /** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
  append: InputMaybe<Scalars['Boolean']['input']>;
  /** The input list of items to set. */
  nodes: InputMaybe<Array<InputMaybe<PostCategoriesNodeInput>>>;
};

/** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostCategoriesNodeInput = {
  /** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
  description: InputMaybe<Scalars['String']['input']>;
  /** The ID of the category. If present, this will be used to connect to the post. If no existing category exists with this ID, no connection will be made. */
  id: InputMaybe<Scalars['ID']['input']>;
  /** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name: InputMaybe<Scalars['String']['input']>;
  /** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug: InputMaybe<Scalars['String']['input']>;
};

/** Connection to post Nodes */
export type PostConnection = {
  /** A list of edges (relational context) between RootQuery and connected post Nodes */
  edges: Array<PostConnectionEdge>;
  /** A list of connected post Nodes */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: PostConnectionPageInfo;
};

/** Edge between a Node and a connected post */
export type PostConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected post Node */
  node: Post;
};

/** Page Info on the connected PostConnectionEdge */
export type PostConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** The postFormat type */
export type PostFormat = DatabaseIdentifier & Node & TermNode & UniformResourceIdentifiable & {
  __typename?: 'PostFormat';
  /** Connection between the PostFormat type and the ContentNode type */
  contentNodes: Maybe<PostFormatToContentNodeConnection>;
  /** The number of objects connected to the object */
  count: Maybe<Scalars['Int']['output']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** The description of the object */
  description: Maybe<Scalars['String']['output']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The globally unique ID for the object */
  id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is restricted from the current viewer */
  isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** The link to the term */
  link: Maybe<Scalars['String']['output']>;
  /** The human friendly name of the object. */
  name: Maybe<Scalars['String']['output']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  postFormatId: Maybe<Scalars['Int']['output']>;
  /** Connection between the PostFormat type and the post type */
  posts: Maybe<PostFormatToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug: Maybe<Scalars['String']['output']>;
  /** Connection between the PostFormat type and the Taxonomy type */
  taxonomy: Maybe<PostFormatToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName: Maybe<Scalars['String']['output']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId: Maybe<Scalars['Int']['output']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId: Maybe<Scalars['Int']['output']>;
  /** The unique resource identifier path */
  uri: Maybe<Scalars['String']['output']>;
};


/** The postFormat type */
export type PostFormatContentNodesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PostFormatToContentNodeConnectionWhereArgs>;
};


/** The postFormat type */
export type PostFormatEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The postFormat type */
export type PostFormatEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The postFormat type */
export type PostFormatPostsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<PostFormatToPostConnectionWhereArgs>;
};

/** Connection to postFormat Nodes */
export type PostFormatConnection = {
  /** A list of edges (relational context) between RootQuery and connected postFormat Nodes */
  edges: Array<PostFormatConnectionEdge>;
  /** A list of connected postFormat Nodes */
  nodes: Array<PostFormat>;
  /** Information about pagination in a connection. */
  pageInfo: PostFormatConnectionPageInfo;
};

/** Edge between a Node and a connected postFormat */
export type PostFormatConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected postFormat Node */
  node: PostFormat;
};

/** Page Info on the connected PostFormatConnectionEdge */
export type PostFormatConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PostFormatIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the PostFormat type and the ContentNode type */
export type PostFormatToContentNodeConnection = Connection & ContentNodeConnection & {
  __typename?: 'PostFormatToContentNodeConnection';
  /** Edges for the PostFormatToContentNodeConnection connection */
  edges: Array<PostFormatToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: PostFormatToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type PostFormatToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'PostFormatToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;PostFormatToContentNodeConnection&quot; */
export type PostFormatToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'PostFormatToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the PostFormatToContentNodeConnection connection */
export type PostFormatToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes: InputMaybe<Array<InputMaybe<ContentTypesOfPostFormatEnum>>>;
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the PostFormat type and the post type */
export type PostFormatToPostConnection = Connection & PostConnection & {
  __typename?: 'PostFormatToPostConnection';
  /** Edges for the PostFormatToPostConnection connection */
  edges: Array<PostFormatToPostConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: PostFormatToPostConnectionPageInfo;
};

/** An edge in a connection */
export type PostFormatToPostConnectionEdge = Edge & PostConnectionEdge & {
  __typename?: 'PostFormatToPostConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Post;
};

/** Page Info on the &quot;PostFormatToPostConnection&quot; */
export type PostFormatToPostConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  __typename?: 'PostFormatToPostConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the PostFormatToPostConnection connection */
export type PostFormatToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Category ID */
  categoryId: InputMaybe<Scalars['Int']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Use Category Slug */
  categoryName: InputMaybe<Scalars['String']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag: InputMaybe<Scalars['String']['input']>;
  /** Use Tag ID */
  tagId: InputMaybe<Scalars['String']['input']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the PostFormat type and the Taxonomy type */
export type PostFormatToTaxonomyConnectionEdge = Edge & OneToOneConnection & TaxonomyConnectionEdge & {
  __typename?: 'PostFormatToTaxonomyConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  node: Taxonomy;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PostIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** The format of post field data. */
export enum PostObjectFieldFormatEnum {
  /** Provide the field value directly from database. Null on unauthenticated requests. */
  Raw = 'RAW',
  /** Provide the field value as rendered by WordPress. Default. */
  Rendered = 'RENDERED'
}

/** The column to use when filtering by date */
export enum PostObjectsConnectionDateColumnEnum {
  /** The date the comment was created in local time. */
  Date = 'DATE',
  /** The most recent modification date of the comment. */
  Modified = 'MODIFIED'
}

/** Field to order the connection by */
export enum PostObjectsConnectionOrderbyEnum {
  /** Order by author */
  Author = 'AUTHOR',
  /** Order by the number of comments it has acquired */
  CommentCount = 'COMMENT_COUNT',
  /** Order by publish date */
  Date = 'DATE',
  /** Preserve the ID order given in the IN array */
  In = 'IN',
  /** Order by the menu order value */
  MenuOrder = 'MENU_ORDER',
  /** Order by last modified date */
  Modified = 'MODIFIED',
  /** Preserve slug order given in the NAME_IN array */
  NameIn = 'NAME_IN',
  /** Order by parent ID */
  Parent = 'PARENT',
  /** Order by slug */
  Slug = 'SLUG',
  /** Order by title */
  Title = 'TITLE'
}

/** Options for ordering the connection */
export type PostObjectsConnectionOrderbyInput = {
  /** The field to order the connection by */
  field: PostObjectsConnectionOrderbyEnum;
  /** Possible directions in which to order a list of items */
  order: OrderEnum;
};

/** Set relationships between the post to postFormats */
export type PostPostFormatsInput = {
  /** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
  append: InputMaybe<Scalars['Boolean']['input']>;
  /** The input list of items to set. */
  nodes: InputMaybe<Array<InputMaybe<PostPostFormatsNodeInput>>>;
};

/** List of postFormats to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostPostFormatsNodeInput = {
  /** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
  description: InputMaybe<Scalars['String']['input']>;
  /** The ID of the postFormat. If present, this will be used to connect to the post. If no existing postFormat exists with this ID, no connection will be made. */
  id: InputMaybe<Scalars['ID']['input']>;
  /** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name: InputMaybe<Scalars['String']['input']>;
  /** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug: InputMaybe<Scalars['String']['input']>;
};

/** The status of the object. */
export enum PostStatusEnum {
  /** Objects with the acf-disabled status */
  AcfDisabled = 'ACF_DISABLED',
  /** Objects with the auto-draft status */
  AutoDraft = 'AUTO_DRAFT',
  /** Objects with the draft status */
  Draft = 'DRAFT',
  /** Objects with the draft-revision status */
  DraftRevision = 'DRAFT_REVISION',
  /** Objects with the future status */
  Future = 'FUTURE',
  /** Objects with the future-revision status */
  FutureRevision = 'FUTURE_REVISION',
  /** Objects with the inherit status */
  Inherit = 'INHERIT',
  /** Objects with the pending status */
  Pending = 'PENDING',
  /** Objects with the pending-revision status */
  PendingRevision = 'PENDING_REVISION',
  /** Objects with the private status */
  Private = 'PRIVATE',
  /** Objects with the publish status */
  Publish = 'PUBLISH',
  /** Objects with the request-completed status */
  RequestCompleted = 'REQUEST_COMPLETED',
  /** Objects with the request-confirmed status */
  RequestConfirmed = 'REQUEST_CONFIRMED',
  /** Objects with the request-failed status */
  RequestFailed = 'REQUEST_FAILED',
  /** Objects with the request-pending status */
  RequestPending = 'REQUEST_PENDING',
  /** Objects with the trash status */
  Trash = 'TRASH'
}

/** Set relationships between the post to tags */
export type PostTagsInput = {
  /** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
  append: InputMaybe<Scalars['Boolean']['input']>;
  /** The input list of items to set. */
  nodes: InputMaybe<Array<InputMaybe<PostTagsNodeInput>>>;
};

/** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostTagsNodeInput = {
  /** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
  description: InputMaybe<Scalars['String']['input']>;
  /** The ID of the tag. If present, this will be used to connect to the post. If no existing tag exists with this ID, no connection will be made. */
  id: InputMaybe<Scalars['ID']['input']>;
  /** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name: InputMaybe<Scalars['String']['input']>;
  /** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the Post type and the category type */
export type PostToCategoryConnection = CategoryConnection & Connection & {
  __typename?: 'PostToCategoryConnection';
  /** Edges for the PostToCategoryConnection connection */
  edges: Array<PostToCategoryConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Category>;
  /** Information about pagination in a connection. */
  pageInfo: PostToCategoryConnectionPageInfo;
};

/** An edge in a connection */
export type PostToCategoryConnectionEdge = CategoryConnectionEdge & Edge & {
  __typename?: 'PostToCategoryConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Category;
};

/** Page Info on the &quot;PostToCategoryConnection&quot; */
export type PostToCategoryConnectionPageInfo = CategoryConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'PostToCategoryConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the PostToCategoryConnection connection */
export type PostToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache: InputMaybe<Scalars['Boolean']['input']>;
};

/** Connection between the Post type and the Comment type */
export type PostToCommentConnection = CommentConnection & Connection & {
  __typename?: 'PostToCommentConnection';
  /** Edges for the PostToCommentConnection connection */
  edges: Array<PostToCommentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Comment>;
  /** Information about pagination in a connection. */
  pageInfo: PostToCommentConnectionPageInfo;
};

/** An edge in a connection */
export type PostToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  __typename?: 'PostToCommentConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Comment;
};

/** Page Info on the &quot;PostToCommentConnection&quot; */
export type PostToCommentConnectionPageInfo = CommentConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'PostToCommentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the PostToCommentConnection connection */
export type PostToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail: InputMaybe<Scalars['String']['input']>;
  /** Array of author IDs to include comments for. */
  authorIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Comment author URL. */
  authorUrl: InputMaybe<Scalars['String']['input']>;
  /** Array of comment IDs to include. */
  commentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Include comments of a given type. */
  commentType: InputMaybe<Scalars['String']['input']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn: InputMaybe<Scalars['String']['input']>;
  /** Content object author ID to limit results by. */
  contentAuthor: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId: InputMaybe<Scalars['ID']['input']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName: InputMaybe<Scalars['String']['input']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent: InputMaybe<Scalars['Int']['input']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Karma score to retrieve matching comments for. */
  karma: InputMaybe<Scalars['Int']['input']>;
  /** The cardinality of the order of the connection */
  order: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent: InputMaybe<Scalars['Int']['input']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Comment status to limit results by. */
  status: InputMaybe<Scalars['String']['input']>;
  /** Include comments for a specific user ID. */
  userId: InputMaybe<Scalars['ID']['input']>;
};

/** Connection between the Post type and the post type */
export type PostToParentConnectionEdge = Edge & OneToOneConnection & PostConnectionEdge & {
  __typename?: 'PostToParentConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /**
   * The node of the connection, without the edges
   * @deprecated This content type is not hierarchical and typically will not have a parent
   */
  node: Post;
};

/** Connection between the Post type and the post type */
export type PostToPostConnection = Connection & PostConnection & {
  __typename?: 'PostToPostConnection';
  /** Edges for the PostToPostConnection connection */
  edges: Array<PostToPostConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: PostToPostConnectionPageInfo;
};

/** An edge in a connection */
export type PostToPostConnectionEdge = Edge & PostConnectionEdge & {
  __typename?: 'PostToPostConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated This content type is not hierarchical and typically will not have ancestors
   */
  cursor: Maybe<Scalars['String']['output']>;
  /**
   * The item at the end of the edge
   * @deprecated This content type is not hierarchical and typically will not have ancestors
   */
  node: Post;
};

/** Page Info on the &quot;PostToPostConnection&quot; */
export type PostToPostConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  __typename?: 'PostToPostConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Connection between the Post type and the postFormat type */
export type PostToPostFormatConnection = Connection & PostFormatConnection & {
  __typename?: 'PostToPostFormatConnection';
  /** Edges for the PostToPostFormatConnection connection */
  edges: Array<PostToPostFormatConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<PostFormat>;
  /** Information about pagination in a connection. */
  pageInfo: PostToPostFormatConnectionPageInfo;
};

/** An edge in a connection */
export type PostToPostFormatConnectionEdge = Edge & PostFormatConnectionEdge & {
  __typename?: 'PostToPostFormatConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: PostFormat;
};

/** Page Info on the &quot;PostToPostFormatConnection&quot; */
export type PostToPostFormatConnectionPageInfo = PageInfo & PostFormatConnectionPageInfo & WpPageInfo & {
  __typename?: 'PostToPostFormatConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the PostToPostFormatConnection connection */
export type PostToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache: InputMaybe<Scalars['Boolean']['input']>;
};

/** Connection between the Post type and the post type */
export type PostToPreviewConnectionEdge = Edge & OneToOneConnection & PostConnectionEdge & {
  __typename?: 'PostToPreviewConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  node: Post;
};

/** Connection between the Post type and the post type */
export type PostToRevisionConnection = Connection & PostConnection & {
  __typename?: 'PostToRevisionConnection';
  /** Edges for the PostToRevisionConnection connection */
  edges: Array<PostToRevisionConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: PostToRevisionConnectionPageInfo;
};

/** An edge in a connection */
export type PostToRevisionConnectionEdge = Edge & PostConnectionEdge & {
  __typename?: 'PostToRevisionConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Post;
};

/** Page Info on the &quot;PostToRevisionConnection&quot; */
export type PostToRevisionConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  __typename?: 'PostToRevisionConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the PostToRevisionConnection connection */
export type PostToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Category ID */
  categoryId: InputMaybe<Scalars['Int']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Use Category Slug */
  categoryName: InputMaybe<Scalars['String']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag: InputMaybe<Scalars['String']['input']>;
  /** Use Tag ID */
  tagId: InputMaybe<Scalars['String']['input']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the Post type and the tag type */
export type PostToTagConnection = Connection & TagConnection & {
  __typename?: 'PostToTagConnection';
  /** Edges for the PostToTagConnection connection */
  edges: Array<PostToTagConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Tag>;
  /** Information about pagination in a connection. */
  pageInfo: PostToTagConnectionPageInfo;
};

/** An edge in a connection */
export type PostToTagConnectionEdge = Edge & TagConnectionEdge & {
  __typename?: 'PostToTagConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Tag;
};

/** Page Info on the &quot;PostToTagConnection&quot; */
export type PostToTagConnectionPageInfo = PageInfo & TagConnectionPageInfo & WpPageInfo & {
  __typename?: 'PostToTagConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the PostToTagConnection connection */
export type PostToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache: InputMaybe<Scalars['Boolean']['input']>;
};

/** Connection between the Post type and the TermNode type */
export type PostToTermNodeConnection = Connection & TermNodeConnection & {
  __typename?: 'PostToTermNodeConnection';
  /** Edges for the PostToTermNodeConnection connection */
  edges: Array<PostToTermNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<TermNode>;
  /** Information about pagination in a connection. */
  pageInfo: PostToTermNodeConnectionPageInfo;
};

/** An edge in a connection */
export type PostToTermNodeConnectionEdge = Edge & TermNodeConnectionEdge & {
  __typename?: 'PostToTermNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: TermNode;
};

/** Page Info on the &quot;PostToTermNodeConnection&quot; */
export type PostToTermNodeConnectionPageInfo = PageInfo & TermNodeConnectionPageInfo & WpPageInfo & {
  __typename?: 'PostToTermNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the PostToTermNodeConnection connection */
export type PostToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The Taxonomy to filter terms by */
  taxonomies: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache: InputMaybe<Scalars['Boolean']['input']>;
};

/** Details for labels of the PostType */
export type PostTypeLabelDetails = {
  __typename?: 'PostTypeLabelDetails';
  /** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
  addNew: Maybe<Scalars['String']['output']>;
  /** Label for adding a new singular item. */
  addNewItem: Maybe<Scalars['String']['output']>;
  /** Label to signify all items in a submenu link. */
  allItems: Maybe<Scalars['String']['output']>;
  /** Label for archives in nav menus */
  archives: Maybe<Scalars['String']['output']>;
  /** Label for the attributes meta box. */
  attributes: Maybe<Scalars['String']['output']>;
  /** Label for editing a singular item. */
  editItem: Maybe<Scalars['String']['output']>;
  /** Label for the Featured Image meta box title. */
  featuredImage: Maybe<Scalars['String']['output']>;
  /** Label for the table views hidden heading. */
  filterItemsList: Maybe<Scalars['String']['output']>;
  /** Label for the media frame button. */
  insertIntoItem: Maybe<Scalars['String']['output']>;
  /** Label for the table hidden heading. */
  itemsList: Maybe<Scalars['String']['output']>;
  /** Label for the table pagination hidden heading. */
  itemsListNavigation: Maybe<Scalars['String']['output']>;
  /** Label for the menu name. */
  menuName: Maybe<Scalars['String']['output']>;
  /** General name for the post type, usually plural. */
  name: Maybe<Scalars['String']['output']>;
  /** Label for the new item page title. */
  newItem: Maybe<Scalars['String']['output']>;
  /** Label used when no items are found. */
  notFound: Maybe<Scalars['String']['output']>;
  /** Label used when no items are in the trash. */
  notFoundInTrash: Maybe<Scalars['String']['output']>;
  /** Label used to prefix parents of hierarchical items. */
  parentItemColon: Maybe<Scalars['String']['output']>;
  /** Label for removing the featured image. */
  removeFeaturedImage: Maybe<Scalars['String']['output']>;
  /** Label for searching plural items. */
  searchItems: Maybe<Scalars['String']['output']>;
  /** Label for setting the featured image. */
  setFeaturedImage: Maybe<Scalars['String']['output']>;
  /** Name for one object of this post type. */
  singularName: Maybe<Scalars['String']['output']>;
  /** Label for the media frame filter. */
  uploadedToThisItem: Maybe<Scalars['String']['output']>;
  /** Label in the media frame for using a featured image. */
  useFeaturedImage: Maybe<Scalars['String']['output']>;
  /** Label for viewing a singular item. */
  viewItem: Maybe<Scalars['String']['output']>;
  /** Label for viewing post type archives. */
  viewItems: Maybe<Scalars['String']['output']>;
};

/** Nodes that can be seen in a preview (unpublished) state. */
export type Previewable = {
  /** Whether the object is a node in the preview state */
  isPreview: Maybe<Scalars['Boolean']['output']>;
  /** The database id of the preview node */
  previewRevisionDatabaseId: Maybe<Scalars['Int']['output']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId: Maybe<Scalars['ID']['output']>;
};

/** The reading setting type */
export type ReadingSettings = {
  __typename?: 'ReadingSettings';
  /** The ID of the page that should display the latest posts */
  pageForPosts: Maybe<Scalars['Int']['output']>;
  /** The ID of the page that should be displayed on the front page */
  pageOnFront: Maybe<Scalars['Int']['output']>;
  /** Blog pages show at most. */
  postsPerPage: Maybe<Scalars['Int']['output']>;
  /** What to show on the front page */
  showOnFront: Maybe<Scalars['String']['output']>;
};

/** Input for the registerUser mutation. */
export type RegisterUserInput = {
  /** User's AOL IM account. */
  aim: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** A string containing content about the user. */
  description: InputMaybe<Scalars['String']['input']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName: InputMaybe<Scalars['String']['input']>;
  /** A string containing the user's email address. */
  email: InputMaybe<Scalars['String']['input']>;
  /** 	The user's first name. */
  firstName: InputMaybe<Scalars['String']['input']>;
  /** User's Jabber account. */
  jabber: InputMaybe<Scalars['String']['input']>;
  /** The user's last name. */
  lastName: InputMaybe<Scalars['String']['input']>;
  /** User's locale. */
  locale: InputMaybe<Scalars['String']['input']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename: InputMaybe<Scalars['String']['input']>;
  /** The user's nickname, defaults to the user's username. */
  nickname: InputMaybe<Scalars['String']['input']>;
  /** A string that contains the plain text password for the user. */
  password: InputMaybe<Scalars['String']['input']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered: InputMaybe<Scalars['String']['input']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing: InputMaybe<Scalars['String']['input']>;
  /** A string that contains the user's username. */
  username: Scalars['String']['input'];
  /** A string containing the user's URL for the user's web site. */
  websiteUrl: InputMaybe<Scalars['String']['input']>;
  /** User's Yahoo IM account. */
  yim: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the registerUser mutation. */
export type RegisterUserPayload = {
  __typename?: 'RegisterUserPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The User object mutation type. */
  user: Maybe<User>;
};

/** The logical relation between each item in the array when there are more than one. */
export enum RelationEnum {
  /** The logical AND condition returns true if both operands are true, otherwise, it returns false. */
  And = 'AND',
  /** The logical OR condition returns false if both operands are false, otherwise, it returns true. */
  Or = 'OR'
}

/** Input for the resetUserPassword mutation. */
export type ResetUserPasswordInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** Password reset key */
  key: InputMaybe<Scalars['String']['input']>;
  /** The user's login (username). */
  login: InputMaybe<Scalars['String']['input']>;
  /** The new password. */
  password: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the resetUserPassword mutation. */
export type ResetUserPasswordPayload = {
  __typename?: 'ResetUserPasswordPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The User object mutation type. */
  user: Maybe<User>;
};

/** Input for the restoreComment mutation. */
export type RestoreCommentInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The ID of the comment to be restored */
  id: Scalars['ID']['input'];
};

/** The payload for the restoreComment mutation. */
export type RestoreCommentPayload = {
  __typename?: 'RestoreCommentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The restored comment object */
  comment: Maybe<Comment>;
  /** The ID of the restored comment */
  restoredId: Maybe<Scalars['ID']['output']>;
};

/** The root mutation */
export type RootMutation = {
  __typename?: 'RootMutation';
  /** The createCategory mutation */
  createCategory: Maybe<CreateCategoryPayload>;
  /** The createCollection mutation */
  createCollection: Maybe<CreateCollectionPayload>;
  /** The createComment mutation */
  createComment: Maybe<CreateCommentPayload>;
  /** The createGraphqlDocument mutation */
  createGraphqlDocument: Maybe<CreateGraphqlDocumentPayload>;
  /** The createGraphqlDocumentGroup mutation */
  createGraphqlDocumentGroup: Maybe<CreateGraphqlDocumentGroupPayload>;
  /** The createHero mutation */
  createHero: Maybe<CreateHeroPayload>;
  /** The createItem mutation */
  createItem: Maybe<CreateItemPayload>;
  /** The createItemType mutation */
  createItemType: Maybe<CreateItemTypePayload>;
  /** The createMediaItem mutation */
  createMediaItem: Maybe<CreateMediaItemPayload>;
  /** The createPage mutation */
  createPage: Maybe<CreatePagePayload>;
  /** The createPost mutation */
  createPost: Maybe<CreatePostPayload>;
  /** The createPostFormat mutation */
  createPostFormat: Maybe<CreatePostFormatPayload>;
  /** The createTag mutation */
  createTag: Maybe<CreateTagPayload>;
  /** The createTeam mutation */
  createTeam: Maybe<CreateTeamPayload>;
  /** The createUser mutation */
  createUser: Maybe<CreateUserPayload>;
  /** The deleteCategory mutation */
  deleteCategory: Maybe<DeleteCategoryPayload>;
  /** The deleteCollection mutation */
  deleteCollection: Maybe<DeleteCollectionPayload>;
  /** The deleteComment mutation */
  deleteComment: Maybe<DeleteCommentPayload>;
  /** The deleteGraphqlDocument mutation */
  deleteGraphqlDocument: Maybe<DeleteGraphqlDocumentPayload>;
  /** The deleteGraphqlDocumentGroup mutation */
  deleteGraphqlDocumentGroup: Maybe<DeleteGraphqlDocumentGroupPayload>;
  /** The deleteHero mutation */
  deleteHero: Maybe<DeleteHeroPayload>;
  /** The deleteItem mutation */
  deleteItem: Maybe<DeleteItemPayload>;
  /** The deleteItemType mutation */
  deleteItemType: Maybe<DeleteItemTypePayload>;
  /** The deleteMediaItem mutation */
  deleteMediaItem: Maybe<DeleteMediaItemPayload>;
  /** The deletePage mutation */
  deletePage: Maybe<DeletePagePayload>;
  /** The deletePost mutation */
  deletePost: Maybe<DeletePostPayload>;
  /** The deletePostFormat mutation */
  deletePostFormat: Maybe<DeletePostFormatPayload>;
  /** The deleteTag mutation */
  deleteTag: Maybe<DeleteTagPayload>;
  /** The deleteTeam mutation */
  deleteTeam: Maybe<DeleteTeamPayload>;
  /** The deleteUser mutation */
  deleteUser: Maybe<DeleteUserPayload>;
  /** The downvoteTeam mutation */
  downvoteTeam: Maybe<DownvoteTeamPayload>;
  /** Increase the count. */
  increaseCount: Maybe<Scalars['Int']['output']>;
  /** The loginWithCookies mutation */
  loginWithCookies: Maybe<LoginWithCookiesPayload>;
  /** The logout mutation */
  logout: Maybe<LogoutPayload>;
  /** The registerUser mutation */
  registerUser: Maybe<RegisterUserPayload>;
  /** The resetUserPassword mutation */
  resetUserPassword: Maybe<ResetUserPasswordPayload>;
  /** The restoreComment mutation */
  restoreComment: Maybe<RestoreCommentPayload>;
  /** Send password reset email to user */
  sendPasswordResetEmail: Maybe<SendPasswordResetEmailPayload>;
  /** The updateCategory mutation */
  updateCategory: Maybe<UpdateCategoryPayload>;
  /** The updateCollection mutation */
  updateCollection: Maybe<UpdateCollectionPayload>;
  /** The updateComment mutation */
  updateComment: Maybe<UpdateCommentPayload>;
  /** The updateGraphqlDocument mutation */
  updateGraphqlDocument: Maybe<UpdateGraphqlDocumentPayload>;
  /** The updateGraphqlDocumentGroup mutation */
  updateGraphqlDocumentGroup: Maybe<UpdateGraphqlDocumentGroupPayload>;
  /** The updateHero mutation */
  updateHero: Maybe<UpdateHeroPayload>;
  /** The updateItem mutation */
  updateItem: Maybe<UpdateItemPayload>;
  /** The updateItemType mutation */
  updateItemType: Maybe<UpdateItemTypePayload>;
  /** The updateMediaItem mutation */
  updateMediaItem: Maybe<UpdateMediaItemPayload>;
  /** The updatePage mutation */
  updatePage: Maybe<UpdatePagePayload>;
  /** The updatePost mutation */
  updatePost: Maybe<UpdatePostPayload>;
  /** The updatePostFormat mutation */
  updatePostFormat: Maybe<UpdatePostFormatPayload>;
  /** The updateSettings mutation */
  updateSettings: Maybe<UpdateSettingsPayload>;
  /** The updateTag mutation */
  updateTag: Maybe<UpdateTagPayload>;
  /** The updateTeam mutation */
  updateTeam: Maybe<UpdateTeamPayload>;
  /** The updateUser mutation */
  updateUser: Maybe<UpdateUserPayload>;
  /** The upvoteTeam mutation */
  upvoteTeam: Maybe<UpvoteTeamPayload>;
};


/** The root mutation */
export type RootMutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


/** The root mutation */
export type RootMutationCreateCollectionArgs = {
  input: CreateCollectionInput;
};


/** The root mutation */
export type RootMutationCreateCommentArgs = {
  input: CreateCommentInput;
};


/** The root mutation */
export type RootMutationCreateGraphqlDocumentArgs = {
  input: CreateGraphqlDocumentInput;
};


/** The root mutation */
export type RootMutationCreateGraphqlDocumentGroupArgs = {
  input: CreateGraphqlDocumentGroupInput;
};


/** The root mutation */
export type RootMutationCreateHeroArgs = {
  input: CreateHeroInput;
};


/** The root mutation */
export type RootMutationCreateItemArgs = {
  input: CreateItemInput;
};


/** The root mutation */
export type RootMutationCreateItemTypeArgs = {
  input: CreateItemTypeInput;
};


/** The root mutation */
export type RootMutationCreateMediaItemArgs = {
  input: CreateMediaItemInput;
};


/** The root mutation */
export type RootMutationCreatePageArgs = {
  input: CreatePageInput;
};


/** The root mutation */
export type RootMutationCreatePostArgs = {
  input: CreatePostInput;
};


/** The root mutation */
export type RootMutationCreatePostFormatArgs = {
  input: CreatePostFormatInput;
};


/** The root mutation */
export type RootMutationCreateTagArgs = {
  input: CreateTagInput;
};


/** The root mutation */
export type RootMutationCreateTeamArgs = {
  input: CreateTeamInput;
};


/** The root mutation */
export type RootMutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation */
export type RootMutationDeleteCategoryArgs = {
  input: DeleteCategoryInput;
};


/** The root mutation */
export type RootMutationDeleteCollectionArgs = {
  input: DeleteCollectionInput;
};


/** The root mutation */
export type RootMutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};


/** The root mutation */
export type RootMutationDeleteGraphqlDocumentArgs = {
  input: DeleteGraphqlDocumentInput;
};


/** The root mutation */
export type RootMutationDeleteGraphqlDocumentGroupArgs = {
  input: DeleteGraphqlDocumentGroupInput;
};


/** The root mutation */
export type RootMutationDeleteHeroArgs = {
  input: DeleteHeroInput;
};


/** The root mutation */
export type RootMutationDeleteItemArgs = {
  input: DeleteItemInput;
};


/** The root mutation */
export type RootMutationDeleteItemTypeArgs = {
  input: DeleteItemTypeInput;
};


/** The root mutation */
export type RootMutationDeleteMediaItemArgs = {
  input: DeleteMediaItemInput;
};


/** The root mutation */
export type RootMutationDeletePageArgs = {
  input: DeletePageInput;
};


/** The root mutation */
export type RootMutationDeletePostArgs = {
  input: DeletePostInput;
};


/** The root mutation */
export type RootMutationDeletePostFormatArgs = {
  input: DeletePostFormatInput;
};


/** The root mutation */
export type RootMutationDeleteTagArgs = {
  input: DeleteTagInput;
};


/** The root mutation */
export type RootMutationDeleteTeamArgs = {
  input: DeleteTeamInput;
};


/** The root mutation */
export type RootMutationDeleteUserArgs = {
  input: DeleteUserInput;
};


/** The root mutation */
export type RootMutationDownvoteTeamArgs = {
  input: DownvoteTeamInput;
};


/** The root mutation */
export type RootMutationIncreaseCountArgs = {
  count: InputMaybe<Scalars['Int']['input']>;
};


/** The root mutation */
export type RootMutationLoginWithCookiesArgs = {
  input: LoginWithCookiesInput;
};


/** The root mutation */
export type RootMutationLogoutArgs = {
  input: LogoutInput;
};


/** The root mutation */
export type RootMutationRegisterUserArgs = {
  input: RegisterUserInput;
};


/** The root mutation */
export type RootMutationResetUserPasswordArgs = {
  input: ResetUserPasswordInput;
};


/** The root mutation */
export type RootMutationRestoreCommentArgs = {
  input: RestoreCommentInput;
};


/** The root mutation */
export type RootMutationSendPasswordResetEmailArgs = {
  input: SendPasswordResetEmailInput;
};


/** The root mutation */
export type RootMutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


/** The root mutation */
export type RootMutationUpdateCollectionArgs = {
  input: UpdateCollectionInput;
};


/** The root mutation */
export type RootMutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};


/** The root mutation */
export type RootMutationUpdateGraphqlDocumentArgs = {
  input: UpdateGraphqlDocumentInput;
};


/** The root mutation */
export type RootMutationUpdateGraphqlDocumentGroupArgs = {
  input: UpdateGraphqlDocumentGroupInput;
};


/** The root mutation */
export type RootMutationUpdateHeroArgs = {
  input: UpdateHeroInput;
};


/** The root mutation */
export type RootMutationUpdateItemArgs = {
  input: UpdateItemInput;
};


/** The root mutation */
export type RootMutationUpdateItemTypeArgs = {
  input: UpdateItemTypeInput;
};


/** The root mutation */
export type RootMutationUpdateMediaItemArgs = {
  input: UpdateMediaItemInput;
};


/** The root mutation */
export type RootMutationUpdatePageArgs = {
  input: UpdatePageInput;
};


/** The root mutation */
export type RootMutationUpdatePostArgs = {
  input: UpdatePostInput;
};


/** The root mutation */
export type RootMutationUpdatePostFormatArgs = {
  input: UpdatePostFormatInput;
};


/** The root mutation */
export type RootMutationUpdateSettingsArgs = {
  input: UpdateSettingsInput;
};


/** The root mutation */
export type RootMutationUpdateTagArgs = {
  input: UpdateTagInput;
};


/** The root mutation */
export type RootMutationUpdateTeamArgs = {
  input: UpdateTeamInput;
};


/** The root mutation */
export type RootMutationUpdateUserArgs = {
  input: UpdateUserInput;
};


/** The root mutation */
export type RootMutationUpvoteTeamArgs = {
  input: UpvoteTeamInput;
};

/** The root entry point into the Graph */
export type RootQuery = {
  __typename?: 'RootQuery';
  /** Entry point to get all settings for the site */
  allSettings: Maybe<Settings>;
  /** Connection between the RootQuery type and the category type */
  categories: Maybe<RootQueryToCategoryConnection>;
  /** A 0bject */
  category: Maybe<Category>;
  /** An object of the collection Type. Collections */
  collection: Maybe<Collection>;
  /**
   * A collection object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  collectionBy: Maybe<Collection>;
  /** Connection between the RootQuery type and the collection type */
  collections: Maybe<RootQueryToCollectionConnection>;
  /** Returns a Comment */
  comment: Maybe<Comment>;
  /** Connection between the RootQuery type and the Comment type */
  comments: Maybe<RootQueryToCommentConnection>;
  /** A node used to manage content */
  contentNode: Maybe<ContentNode>;
  /** Connection between the RootQuery type and the ContentNode type */
  contentNodes: Maybe<RootQueryToContentNodeConnection>;
  /** Fetch a Content Type node by unique Identifier */
  contentType: Maybe<ContentType>;
  /** Connection between the RootQuery type and the ContentType type */
  contentTypes: Maybe<RootQueryToContentTypeConnection>;
  /** Fields of the &#039;DiscussionSettings&#039; settings group */
  discussionSettings: Maybe<DiscussionSettings>;
  /** Fields of the &#039;GeneralSettings&#039; settings group */
  generalSettings: Maybe<GeneralSettings>;
  /** An object of the graphqlDocument Type. Saved GraphQL Documents */
  graphqlDocument: Maybe<GraphqlDocument>;
  /**
   * A graphqlDocument object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  graphqlDocumentBy: Maybe<GraphqlDocument>;
  /** A 0bject */
  graphqlDocumentGroup: Maybe<GraphqlDocumentGroup>;
  /** Connection between the RootQuery type and the graphqlDocumentGroup type */
  graphqlDocumentGroups: Maybe<RootQueryToGraphqlDocumentGroupConnection>;
  /** Connection between the RootQuery type and the graphqlDocument type */
  graphqlDocuments: Maybe<RootQueryToGraphqlDocumentConnection>;
  /** An object of the hero Type. Heroes */
  hero: Maybe<Hero>;
  /**
   * A hero object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  heroBy: Maybe<Hero>;
  /** Connection between the RootQuery type and the hero type */
  heroes: Maybe<RootQueryToHeroConnection>;
  /** An object of the item Type. Equipment */
  item: Maybe<Item>;
  /**
   * A item object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  itemBy: Maybe<Item>;
  /** A 0bject */
  itemType: Maybe<ItemType>;
  /** Connection between the RootQuery type and the itemType type */
  itemTypes: Maybe<RootQueryToItemTypeConnection>;
  /** Connection between the RootQuery type and the item type */
  items: Maybe<RootQueryToItemConnection>;
  /** An object of the mediaItem Type.  */
  mediaItem: Maybe<MediaItem>;
  /**
   * A mediaItem object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  mediaItemBy: Maybe<MediaItem>;
  /** Connection between the RootQuery type and the mediaItem type */
  mediaItems: Maybe<RootQueryToMediaItemConnection>;
  /** A WordPress navigation menu */
  menu: Maybe<Menu>;
  /** A WordPress navigation menu item */
  menuItem: Maybe<MenuItem>;
  /** Connection between the RootQuery type and the MenuItem type */
  menuItems: Maybe<RootQueryToMenuItemConnection>;
  /** Connection between the RootQuery type and the Menu type */
  menus: Maybe<RootQueryToMenuConnection>;
  /** Fetches an object given its ID */
  node: Maybe<Node>;
  /** Fetches an object given its Unique Resource Identifier */
  nodeByUri: Maybe<UniformResourceIdentifiable>;
  /** An object of the page Type.  */
  page: Maybe<Page>;
  /**
   * A page object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  pageBy: Maybe<Page>;
  /** Connection between the RootQuery type and the page type */
  pages: Maybe<RootQueryToPageConnection>;
  /** A WordPress plugin */
  plugin: Maybe<Plugin>;
  /** Connection between the RootQuery type and the Plugin type */
  plugins: Maybe<RootQueryToPluginConnection>;
  /** An object of the post Type.  */
  post: Maybe<Post>;
  /**
   * A post object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  postBy: Maybe<Post>;
  /** A 0bject */
  postFormat: Maybe<PostFormat>;
  /** Connection between the RootQuery type and the postFormat type */
  postFormats: Maybe<RootQueryToPostFormatConnection>;
  /** Connection between the RootQuery type and the post type */
  posts: Maybe<RootQueryToPostConnection>;
  /** Fields of the &#039;ReadingSettings&#039; settings group */
  readingSettings: Maybe<ReadingSettings>;
  /** Connection between the RootQuery type and the EnqueuedScript type */
  registeredScripts: Maybe<RootQueryToEnqueuedScriptConnection>;
  /** Connection between the RootQuery type and the EnqueuedStylesheet type */
  registeredStylesheets: Maybe<RootQueryToEnqueuedStylesheetConnection>;
  /** Connection between the RootQuery type and the ContentNode type */
  revisions: Maybe<RootQueryToRevisionsConnection>;
  /** A 0bject */
  tag: Maybe<Tag>;
  /** Connection between the RootQuery type and the tag type */
  tags: Maybe<RootQueryToTagConnection>;
  /** Connection between the RootQuery type and the Taxonomy type */
  taxonomies: Maybe<RootQueryToTaxonomyConnection>;
  /** Fetch a Taxonomy node by unique Identifier */
  taxonomy: Maybe<Taxonomy>;
  /** An object of the team Type. Teams */
  team: Maybe<Team>;
  /**
   * A team object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  teamBy: Maybe<Team>;
  /** Connection between the RootQuery type and the TeamVote type */
  teamVotes: Maybe<RootQueryToTeamVoteConnection>;
  /** Connection between the RootQuery type and the team type */
  teams: Maybe<RootQueryToTeamConnection>;
  /** Get teams and their total vote and downvote counts for a specific hero and user */
  teamsVotesByHero: Maybe<Array<Maybe<TeamVoteCount>>>;
  /** A node in a taxonomy used to group and relate content nodes */
  termNode: Maybe<TermNode>;
  /** Connection between the RootQuery type and the TermNode type */
  terms: Maybe<RootQueryToTermNodeConnection>;
  /** A Theme object */
  theme: Maybe<Theme>;
  /** Connection between the RootQuery type and the Theme type */
  themes: Maybe<RootQueryToThemeConnection>;
  /** Returns a user */
  user: Maybe<User>;
  /** Returns a user role */
  userRole: Maybe<UserRole>;
  /** Connection between the RootQuery type and the UserRole type */
  userRoles: Maybe<RootQueryToUserRoleConnection>;
  /** Get the current user&#039;s vote status for a specific hero and team */
  userVoteStatus: Maybe<Scalars['String']['output']>;
  /** Connection between the RootQuery type and the User type */
  users: Maybe<RootQueryToUserConnection>;
  /** Returns the current user */
  viewer: Maybe<User>;
  /** Fields of the &#039;WritingSettings&#039; settings group */
  writingSettings: Maybe<WritingSettings>;
};


/** The root entry point into the Graph */
export type RootQueryCategoriesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToCategoryConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryCategoryArgs = {
  id: Scalars['ID']['input'];
  idType: InputMaybe<CategoryIdType>;
};


/** The root entry point into the Graph */
export type RootQueryCollectionArgs = {
  asPreview: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  idType: InputMaybe<CollectionIdType>;
};


/** The root entry point into the Graph */
export type RootQueryCollectionByArgs = {
  collectionId: InputMaybe<Scalars['Int']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  uri: InputMaybe<Scalars['String']['input']>;
};


/** The root entry point into the Graph */
export type RootQueryCollectionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToCollectionConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryCommentArgs = {
  id: Scalars['ID']['input'];
  idType: InputMaybe<CommentNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryCommentsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToCommentConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryContentNodeArgs = {
  asPreview: InputMaybe<Scalars['Boolean']['input']>;
  contentType: InputMaybe<ContentTypeEnum>;
  id: Scalars['ID']['input'];
  idType: InputMaybe<ContentNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryContentNodesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToContentNodeConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryContentTypeArgs = {
  id: Scalars['ID']['input'];
  idType: InputMaybe<ContentTypeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryContentTypesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The root entry point into the Graph */
export type RootQueryGraphqlDocumentArgs = {
  asPreview: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  idType: InputMaybe<GraphqlDocumentIdType>;
};


/** The root entry point into the Graph */
export type RootQueryGraphqlDocumentByArgs = {
  graphqlDocumentId: InputMaybe<Scalars['Int']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  uri: InputMaybe<Scalars['String']['input']>;
};


/** The root entry point into the Graph */
export type RootQueryGraphqlDocumentGroupArgs = {
  id: Scalars['ID']['input'];
  idType: InputMaybe<GraphqlDocumentGroupIdType>;
};


/** The root entry point into the Graph */
export type RootQueryGraphqlDocumentGroupsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToGraphqlDocumentGroupConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryGraphqlDocumentsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToGraphqlDocumentConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryHeroArgs = {
  asPreview: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  idType: InputMaybe<HeroIdType>;
};


/** The root entry point into the Graph */
export type RootQueryHeroByArgs = {
  heroId: InputMaybe<Scalars['Int']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  uri: InputMaybe<Scalars['String']['input']>;
};


/** The root entry point into the Graph */
export type RootQueryHeroesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToHeroConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryItemArgs = {
  asPreview: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  idType: InputMaybe<ItemIdType>;
};


/** The root entry point into the Graph */
export type RootQueryItemByArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  itemId: InputMaybe<Scalars['Int']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  uri: InputMaybe<Scalars['String']['input']>;
};


/** The root entry point into the Graph */
export type RootQueryItemTypeArgs = {
  id: Scalars['ID']['input'];
  idType: InputMaybe<ItemTypeIdType>;
};


/** The root entry point into the Graph */
export type RootQueryItemTypesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToItemTypeConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryItemsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToItemConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryMediaItemArgs = {
  asPreview: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  idType: InputMaybe<MediaItemIdType>;
};


/** The root entry point into the Graph */
export type RootQueryMediaItemByArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  mediaItemId: InputMaybe<Scalars['Int']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  uri: InputMaybe<Scalars['String']['input']>;
};


/** The root entry point into the Graph */
export type RootQueryMediaItemsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToMediaItemConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryMenuArgs = {
  id: Scalars['ID']['input'];
  idType: InputMaybe<MenuNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryMenuItemArgs = {
  id: Scalars['ID']['input'];
  idType: InputMaybe<MenuItemNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryMenuItemsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToMenuItemConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryMenusArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToMenuConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryNodeArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};


/** The root entry point into the Graph */
export type RootQueryNodeByUriArgs = {
  uri: Scalars['String']['input'];
};


/** The root entry point into the Graph */
export type RootQueryPageArgs = {
  asPreview: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  idType: InputMaybe<PageIdType>;
};


/** The root entry point into the Graph */
export type RootQueryPageByArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  pageId: InputMaybe<Scalars['Int']['input']>;
  uri: InputMaybe<Scalars['String']['input']>;
};


/** The root entry point into the Graph */
export type RootQueryPagesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToPageConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryPluginArgs = {
  id: Scalars['ID']['input'];
};


/** The root entry point into the Graph */
export type RootQueryPluginsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToPluginConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryPostArgs = {
  asPreview: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  idType: InputMaybe<PostIdType>;
};


/** The root entry point into the Graph */
export type RootQueryPostByArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  postId: InputMaybe<Scalars['Int']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  uri: InputMaybe<Scalars['String']['input']>;
};


/** The root entry point into the Graph */
export type RootQueryPostFormatArgs = {
  id: Scalars['ID']['input'];
  idType: InputMaybe<PostFormatIdType>;
};


/** The root entry point into the Graph */
export type RootQueryPostFormatsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToPostFormatConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryPostsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToPostConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryRegisteredScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The root entry point into the Graph */
export type RootQueryRegisteredStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The root entry point into the Graph */
export type RootQueryRevisionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToRevisionsConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryTagArgs = {
  id: Scalars['ID']['input'];
  idType: InputMaybe<TagIdType>;
};


/** The root entry point into the Graph */
export type RootQueryTagsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToTagConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryTaxonomiesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The root entry point into the Graph */
export type RootQueryTaxonomyArgs = {
  id: Scalars['ID']['input'];
  idType: InputMaybe<TaxonomyIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryTeamArgs = {
  asPreview: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  idType: InputMaybe<TeamIdType>;
};


/** The root entry point into the Graph */
export type RootQueryTeamByArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  teamId: InputMaybe<Scalars['Int']['input']>;
  uri: InputMaybe<Scalars['String']['input']>;
};


/** The root entry point into the Graph */
export type RootQueryTeamVotesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The root entry point into the Graph */
export type RootQueryTeamsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToTeamConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryTeamsVotesByHeroArgs = {
  heroId: InputMaybe<Scalars['Int']['input']>;
  ipAddress?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


/** The root entry point into the Graph */
export type RootQueryTermNodeArgs = {
  id: Scalars['ID']['input'];
  idType: InputMaybe<TermNodeIdTypeEnum>;
  taxonomy: InputMaybe<TaxonomyEnum>;
};


/** The root entry point into the Graph */
export type RootQueryTermsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToTermNodeConnectionWhereArgs>;
};


/** The root entry point into the Graph */
export type RootQueryThemeArgs = {
  id: Scalars['ID']['input'];
};


/** The root entry point into the Graph */
export type RootQueryThemesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The root entry point into the Graph */
export type RootQueryUserArgs = {
  id: Scalars['ID']['input'];
  idType: InputMaybe<UserNodeIdTypeEnum>;
};


/** The root entry point into the Graph */
export type RootQueryUserRoleArgs = {
  id: Scalars['ID']['input'];
};


/** The root entry point into the Graph */
export type RootQueryUserRolesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The root entry point into the Graph */
export type RootQueryUserVoteStatusArgs = {
  heroId: InputMaybe<Scalars['Int']['input']>;
  ipAddress: InputMaybe<Scalars['String']['input']>;
  teamId: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};


/** The root entry point into the Graph */
export type RootQueryUsersArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<RootQueryToUserConnectionWhereArgs>;
};

/** Connection between the RootQuery type and the category type */
export type RootQueryToCategoryConnection = CategoryConnection & Connection & {
  __typename?: 'RootQueryToCategoryConnection';
  /** Edges for the RootQueryToCategoryConnection connection */
  edges: Array<RootQueryToCategoryConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Category>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToCategoryConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToCategoryConnectionEdge = CategoryConnectionEdge & Edge & {
  __typename?: 'RootQueryToCategoryConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Category;
};

/** Page Info on the &quot;RootQueryToCategoryConnection&quot; */
export type RootQueryToCategoryConnectionPageInfo = CategoryConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToCategoryConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToCategoryConnection connection */
export type RootQueryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache: InputMaybe<Scalars['Boolean']['input']>;
};

/** Connection between the RootQuery type and the collection type */
export type RootQueryToCollectionConnection = CollectionConnection & Connection & {
  __typename?: 'RootQueryToCollectionConnection';
  /** Edges for the RootQueryToCollectionConnection connection */
  edges: Array<RootQueryToCollectionConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Collection>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToCollectionConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToCollectionConnectionEdge = CollectionConnectionEdge & Edge & {
  __typename?: 'RootQueryToCollectionConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Collection;
};

/** Page Info on the &quot;RootQueryToCollectionConnection&quot; */
export type RootQueryToCollectionConnectionPageInfo = CollectionConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToCollectionConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToCollectionConnection connection */
export type RootQueryToCollectionConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the RootQuery type and the Comment type */
export type RootQueryToCommentConnection = CommentConnection & Connection & {
  __typename?: 'RootQueryToCommentConnection';
  /** Edges for the RootQueryToCommentConnection connection */
  edges: Array<RootQueryToCommentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Comment>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToCommentConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  __typename?: 'RootQueryToCommentConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Comment;
};

/** Page Info on the &quot;RootQueryToCommentConnection&quot; */
export type RootQueryToCommentConnectionPageInfo = CommentConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToCommentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToCommentConnection connection */
export type RootQueryToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail: InputMaybe<Scalars['String']['input']>;
  /** Array of author IDs to include comments for. */
  authorIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Comment author URL. */
  authorUrl: InputMaybe<Scalars['String']['input']>;
  /** Array of comment IDs to include. */
  commentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Include comments of a given type. */
  commentType: InputMaybe<Scalars['String']['input']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn: InputMaybe<Scalars['String']['input']>;
  /** Content object author ID to limit results by. */
  contentAuthor: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId: InputMaybe<Scalars['ID']['input']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName: InputMaybe<Scalars['String']['input']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent: InputMaybe<Scalars['Int']['input']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Karma score to retrieve matching comments for. */
  karma: InputMaybe<Scalars['Int']['input']>;
  /** The cardinality of the order of the connection */
  order: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent: InputMaybe<Scalars['Int']['input']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Comment status to limit results by. */
  status: InputMaybe<Scalars['String']['input']>;
  /** Include comments for a specific user ID. */
  userId: InputMaybe<Scalars['ID']['input']>;
};

/** Connection between the RootQuery type and the ContentNode type */
export type RootQueryToContentNodeConnection = Connection & ContentNodeConnection & {
  __typename?: 'RootQueryToContentNodeConnection';
  /** Edges for the RootQueryToContentNodeConnection connection */
  edges: Array<RootQueryToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'RootQueryToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;RootQueryToContentNodeConnection&quot; */
export type RootQueryToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToContentNodeConnection connection */
export type RootQueryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the RootQuery type and the ContentType type */
export type RootQueryToContentTypeConnection = Connection & ContentTypeConnection & {
  __typename?: 'RootQueryToContentTypeConnection';
  /** Edges for the RootQueryToContentTypeConnection connection */
  edges: Array<RootQueryToContentTypeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentType>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToContentTypeConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToContentTypeConnectionEdge = ContentTypeConnectionEdge & Edge & {
  __typename?: 'RootQueryToContentTypeConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: ContentType;
};

/** Page Info on the &quot;RootQueryToContentTypeConnection&quot; */
export type RootQueryToContentTypeConnectionPageInfo = ContentTypeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToContentTypeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Connection between the RootQuery type and the EnqueuedScript type */
export type RootQueryToEnqueuedScriptConnection = Connection & EnqueuedScriptConnection & {
  __typename?: 'RootQueryToEnqueuedScriptConnection';
  /** Edges for the RootQueryToEnqueuedScriptConnection connection */
  edges: Array<RootQueryToEnqueuedScriptConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedScript>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToEnqueuedScriptConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToEnqueuedScriptConnectionEdge = Edge & EnqueuedScriptConnectionEdge & {
  __typename?: 'RootQueryToEnqueuedScriptConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: EnqueuedScript;
};

/** Page Info on the &quot;RootQueryToEnqueuedScriptConnection&quot; */
export type RootQueryToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToEnqueuedScriptConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Connection between the RootQuery type and the EnqueuedStylesheet type */
export type RootQueryToEnqueuedStylesheetConnection = Connection & EnqueuedStylesheetConnection & {
  __typename?: 'RootQueryToEnqueuedStylesheetConnection';
  /** Edges for the RootQueryToEnqueuedStylesheetConnection connection */
  edges: Array<RootQueryToEnqueuedStylesheetConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedStylesheet>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToEnqueuedStylesheetConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToEnqueuedStylesheetConnectionEdge = Edge & EnqueuedStylesheetConnectionEdge & {
  __typename?: 'RootQueryToEnqueuedStylesheetConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: EnqueuedStylesheet;
};

/** Page Info on the &quot;RootQueryToEnqueuedStylesheetConnection&quot; */
export type RootQueryToEnqueuedStylesheetConnectionPageInfo = EnqueuedStylesheetConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToEnqueuedStylesheetConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Connection between the RootQuery type and the graphqlDocument type */
export type RootQueryToGraphqlDocumentConnection = Connection & GraphqlDocumentConnection & {
  __typename?: 'RootQueryToGraphqlDocumentConnection';
  /** Edges for the RootQueryToGraphqlDocumentConnection connection */
  edges: Array<RootQueryToGraphqlDocumentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<GraphqlDocument>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToGraphqlDocumentConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToGraphqlDocumentConnectionEdge = Edge & GraphqlDocumentConnectionEdge & {
  __typename?: 'RootQueryToGraphqlDocumentConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: GraphqlDocument;
};

/** Page Info on the &quot;RootQueryToGraphqlDocumentConnection&quot; */
export type RootQueryToGraphqlDocumentConnectionPageInfo = GraphqlDocumentConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToGraphqlDocumentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToGraphqlDocumentConnection connection */
export type RootQueryToGraphqlDocumentConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the RootQuery type and the graphqlDocumentGroup type */
export type RootQueryToGraphqlDocumentGroupConnection = Connection & GraphqlDocumentGroupConnection & {
  __typename?: 'RootQueryToGraphqlDocumentGroupConnection';
  /** Edges for the RootQueryToGraphqlDocumentGroupConnection connection */
  edges: Array<RootQueryToGraphqlDocumentGroupConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<GraphqlDocumentGroup>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToGraphqlDocumentGroupConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToGraphqlDocumentGroupConnectionEdge = Edge & GraphqlDocumentGroupConnectionEdge & {
  __typename?: 'RootQueryToGraphqlDocumentGroupConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: GraphqlDocumentGroup;
};

/** Page Info on the &quot;RootQueryToGraphqlDocumentGroupConnection&quot; */
export type RootQueryToGraphqlDocumentGroupConnectionPageInfo = GraphqlDocumentGroupConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToGraphqlDocumentGroupConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToGraphqlDocumentGroupConnection connection */
export type RootQueryToGraphqlDocumentGroupConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache: InputMaybe<Scalars['Boolean']['input']>;
};

/** Connection between the RootQuery type and the hero type */
export type RootQueryToHeroConnection = Connection & HeroConnection & {
  __typename?: 'RootQueryToHeroConnection';
  /** Edges for the RootQueryToHeroConnection connection */
  edges: Array<RootQueryToHeroConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Hero>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToHeroConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToHeroConnectionEdge = Edge & HeroConnectionEdge & {
  __typename?: 'RootQueryToHeroConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Hero;
};

/** Page Info on the &quot;RootQueryToHeroConnection&quot; */
export type RootQueryToHeroConnectionPageInfo = HeroConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToHeroConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToHeroConnection connection */
export type RootQueryToHeroConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the RootQuery type and the item type */
export type RootQueryToItemConnection = Connection & ItemConnection & {
  __typename?: 'RootQueryToItemConnection';
  /** Edges for the RootQueryToItemConnection connection */
  edges: Array<RootQueryToItemConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Item>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToItemConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToItemConnectionEdge = Edge & ItemConnectionEdge & {
  __typename?: 'RootQueryToItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Item;
};

/** Page Info on the &quot;RootQueryToItemConnection&quot; */
export type RootQueryToItemConnectionPageInfo = ItemConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToItemConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToItemConnection connection */
export type RootQueryToItemConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the RootQuery type and the itemType type */
export type RootQueryToItemTypeConnection = Connection & ItemTypeConnection & {
  __typename?: 'RootQueryToItemTypeConnection';
  /** Edges for the RootQueryToItemTypeConnection connection */
  edges: Array<RootQueryToItemTypeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ItemType>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToItemTypeConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToItemTypeConnectionEdge = Edge & ItemTypeConnectionEdge & {
  __typename?: 'RootQueryToItemTypeConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: ItemType;
};

/** Page Info on the &quot;RootQueryToItemTypeConnection&quot; */
export type RootQueryToItemTypeConnectionPageInfo = ItemTypeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToItemTypeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToItemTypeConnection connection */
export type RootQueryToItemTypeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache: InputMaybe<Scalars['Boolean']['input']>;
};

/** Connection between the RootQuery type and the mediaItem type */
export type RootQueryToMediaItemConnection = Connection & MediaItemConnection & {
  __typename?: 'RootQueryToMediaItemConnection';
  /** Edges for the RootQueryToMediaItemConnection connection */
  edges: Array<RootQueryToMediaItemConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<MediaItem>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToMediaItemConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToMediaItemConnectionEdge = Edge & MediaItemConnectionEdge & {
  __typename?: 'RootQueryToMediaItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: MediaItem;
};

/** Page Info on the &quot;RootQueryToMediaItemConnection&quot; */
export type RootQueryToMediaItemConnectionPageInfo = MediaItemConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToMediaItemConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToMediaItemConnection connection */
export type RootQueryToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the RootQuery type and the Menu type */
export type RootQueryToMenuConnection = Connection & MenuConnection & {
  __typename?: 'RootQueryToMenuConnection';
  /** Edges for the RootQueryToMenuConnection connection */
  edges: Array<RootQueryToMenuConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Menu>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToMenuConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToMenuConnectionEdge = Edge & MenuConnectionEdge & {
  __typename?: 'RootQueryToMenuConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Menu;
};

/** Page Info on the &quot;RootQueryToMenuConnection&quot; */
export type RootQueryToMenuConnectionPageInfo = MenuConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToMenuConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToMenuConnection connection */
export type RootQueryToMenuConnectionWhereArgs = {
  /** The database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** The menu location for the menu being queried */
  location: InputMaybe<MenuLocationEnum>;
  /** The slug of the menu to query items for */
  slug: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the RootQuery type and the MenuItem type */
export type RootQueryToMenuItemConnection = Connection & MenuItemConnection & {
  __typename?: 'RootQueryToMenuItemConnection';
  /** Edges for the RootQueryToMenuItemConnection connection */
  edges: Array<RootQueryToMenuItemConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<MenuItem>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToMenuItemConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToMenuItemConnectionEdge = Edge & MenuItemConnectionEdge & {
  __typename?: 'RootQueryToMenuItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: MenuItem;
};

/** Page Info on the &quot;RootQueryToMenuItemConnection&quot; */
export type RootQueryToMenuItemConnectionPageInfo = MenuItemConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToMenuItemConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export type RootQueryToMenuItemConnectionWhereArgs = {
  /** The database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** The menu location for the menu being queried */
  location: InputMaybe<MenuLocationEnum>;
  /** The database ID of the parent menu object */
  parentDatabaseId: InputMaybe<Scalars['Int']['input']>;
  /** The ID of the parent menu object */
  parentId: InputMaybe<Scalars['ID']['input']>;
};

/** Connection between the RootQuery type and the page type */
export type RootQueryToPageConnection = Connection & PageConnection & {
  __typename?: 'RootQueryToPageConnection';
  /** Edges for the RootQueryToPageConnection connection */
  edges: Array<RootQueryToPageConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Page>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToPageConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToPageConnectionEdge = Edge & PageConnectionEdge & {
  __typename?: 'RootQueryToPageConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Page;
};

/** Page Info on the &quot;RootQueryToPageConnection&quot; */
export type RootQueryToPageConnectionPageInfo = PageConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToPageConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToPageConnection connection */
export type RootQueryToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the RootQuery type and the Plugin type */
export type RootQueryToPluginConnection = Connection & PluginConnection & {
  __typename?: 'RootQueryToPluginConnection';
  /** Edges for the RootQueryToPluginConnection connection */
  edges: Array<RootQueryToPluginConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Plugin>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToPluginConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToPluginConnectionEdge = Edge & PluginConnectionEdge & {
  __typename?: 'RootQueryToPluginConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Plugin;
};

/** Page Info on the &quot;RootQueryToPluginConnection&quot; */
export type RootQueryToPluginConnectionPageInfo = PageInfo & PluginConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToPluginConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToPluginConnection connection */
export type RootQueryToPluginConnectionWhereArgs = {
  /** Show plugin based on a keyword search. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve plugins where plugin status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PluginStatusEnum>>>;
  /** Show plugins with a specific status. */
  status: InputMaybe<PluginStatusEnum>;
};

/** Connection between the RootQuery type and the post type */
export type RootQueryToPostConnection = Connection & PostConnection & {
  __typename?: 'RootQueryToPostConnection';
  /** Edges for the RootQueryToPostConnection connection */
  edges: Array<RootQueryToPostConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToPostConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToPostConnectionEdge = Edge & PostConnectionEdge & {
  __typename?: 'RootQueryToPostConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Post;
};

/** Page Info on the &quot;RootQueryToPostConnection&quot; */
export type RootQueryToPostConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToPostConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToPostConnection connection */
export type RootQueryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Category ID */
  categoryId: InputMaybe<Scalars['Int']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Use Category Slug */
  categoryName: InputMaybe<Scalars['String']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag: InputMaybe<Scalars['String']['input']>;
  /** Use Tag ID */
  tagId: InputMaybe<Scalars['String']['input']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the RootQuery type and the postFormat type */
export type RootQueryToPostFormatConnection = Connection & PostFormatConnection & {
  __typename?: 'RootQueryToPostFormatConnection';
  /** Edges for the RootQueryToPostFormatConnection connection */
  edges: Array<RootQueryToPostFormatConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<PostFormat>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToPostFormatConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToPostFormatConnectionEdge = Edge & PostFormatConnectionEdge & {
  __typename?: 'RootQueryToPostFormatConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: PostFormat;
};

/** Page Info on the &quot;RootQueryToPostFormatConnection&quot; */
export type RootQueryToPostFormatConnectionPageInfo = PageInfo & PostFormatConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToPostFormatConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToPostFormatConnection connection */
export type RootQueryToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache: InputMaybe<Scalars['Boolean']['input']>;
};

/** Connection between the RootQuery type and the ContentNode type */
export type RootQueryToRevisionsConnection = Connection & ContentNodeConnection & {
  __typename?: 'RootQueryToRevisionsConnection';
  /** Edges for the RootQueryToRevisionsConnection connection */
  edges: Array<RootQueryToRevisionsConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToRevisionsConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToRevisionsConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'RootQueryToRevisionsConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;RootQueryToRevisionsConnection&quot; */
export type RootQueryToRevisionsConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'RootQueryToRevisionsConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToRevisionsConnection connection */
export type RootQueryToRevisionsConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the RootQuery type and the tag type */
export type RootQueryToTagConnection = Connection & TagConnection & {
  __typename?: 'RootQueryToTagConnection';
  /** Edges for the RootQueryToTagConnection connection */
  edges: Array<RootQueryToTagConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Tag>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToTagConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToTagConnectionEdge = Edge & TagConnectionEdge & {
  __typename?: 'RootQueryToTagConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Tag;
};

/** Page Info on the &quot;RootQueryToTagConnection&quot; */
export type RootQueryToTagConnectionPageInfo = PageInfo & TagConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToTagConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToTagConnection connection */
export type RootQueryToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache: InputMaybe<Scalars['Boolean']['input']>;
};

/** Connection between the RootQuery type and the Taxonomy type */
export type RootQueryToTaxonomyConnection = Connection & TaxonomyConnection & {
  __typename?: 'RootQueryToTaxonomyConnection';
  /** Edges for the RootQueryToTaxonomyConnection connection */
  edges: Array<RootQueryToTaxonomyConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Taxonomy>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToTaxonomyConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToTaxonomyConnectionEdge = Edge & TaxonomyConnectionEdge & {
  __typename?: 'RootQueryToTaxonomyConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Taxonomy;
};

/** Page Info on the &quot;RootQueryToTaxonomyConnection&quot; */
export type RootQueryToTaxonomyConnectionPageInfo = PageInfo & TaxonomyConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToTaxonomyConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Connection between the RootQuery type and the team type */
export type RootQueryToTeamConnection = Connection & TeamConnection & {
  __typename?: 'RootQueryToTeamConnection';
  /** Edges for the RootQueryToTeamConnection connection */
  edges: Array<RootQueryToTeamConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Team>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToTeamConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToTeamConnectionEdge = Edge & TeamConnectionEdge & {
  __typename?: 'RootQueryToTeamConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Team;
};

/** Page Info on the &quot;RootQueryToTeamConnection&quot; */
export type RootQueryToTeamConnectionPageInfo = PageInfo & TeamConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToTeamConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToTeamConnection connection */
export type RootQueryToTeamConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the RootQuery type and the TeamVote type */
export type RootQueryToTeamVoteConnection = Connection & TeamVoteConnection & {
  __typename?: 'RootQueryToTeamVoteConnection';
  /** Edges for the RootQueryToTeamVoteConnection connection */
  edges: Array<RootQueryToTeamVoteConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<TeamVote>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToTeamVoteConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToTeamVoteConnectionEdge = Edge & TeamVoteConnectionEdge & {
  __typename?: 'RootQueryToTeamVoteConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: TeamVote;
};

/** Page Info on the &quot;RootQueryToTeamVoteConnection&quot; */
export type RootQueryToTeamVoteConnectionPageInfo = PageInfo & TeamVoteConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToTeamVoteConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Connection between the RootQuery type and the TermNode type */
export type RootQueryToTermNodeConnection = Connection & TermNodeConnection & {
  __typename?: 'RootQueryToTermNodeConnection';
  /** Edges for the RootQueryToTermNodeConnection connection */
  edges: Array<RootQueryToTermNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<TermNode>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToTermNodeConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToTermNodeConnectionEdge = Edge & TermNodeConnectionEdge & {
  __typename?: 'RootQueryToTermNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: TermNode;
};

/** Page Info on the &quot;RootQueryToTermNodeConnection&quot; */
export type RootQueryToTermNodeConnectionPageInfo = PageInfo & TermNodeConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToTermNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToTermNodeConnection connection */
export type RootQueryToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain: InputMaybe<Scalars['String']['input']>;
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf: InputMaybe<Scalars['Int']['input']>;
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless: InputMaybe<Scalars['Boolean']['input']>;
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike: InputMaybe<Scalars['String']['input']>;
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical: InputMaybe<Scalars['Boolean']['input']>;
  /** Array of term ids to include. Default empty array. */
  include: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of names to return term(s) for. Default empty. */
  name: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike: InputMaybe<Scalars['String']['input']>;
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Direction the connection should be ordered in */
  order: InputMaybe<OrderEnum>;
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby: InputMaybe<TermObjectsConnectionOrderbyEnum>;
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts: InputMaybe<Scalars['Boolean']['input']>;
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent: InputMaybe<Scalars['Int']['input']>;
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Array of slugs to return term(s) for. Default empty. */
  slug: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The Taxonomy to filter terms by */
  taxonomies: InputMaybe<Array<InputMaybe<TaxonomyEnum>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomyId: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache: InputMaybe<Scalars['Boolean']['input']>;
};

/** Connection between the RootQuery type and the Theme type */
export type RootQueryToThemeConnection = Connection & ThemeConnection & {
  __typename?: 'RootQueryToThemeConnection';
  /** Edges for the RootQueryToThemeConnection connection */
  edges: Array<RootQueryToThemeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Theme>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToThemeConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToThemeConnectionEdge = Edge & ThemeConnectionEdge & {
  __typename?: 'RootQueryToThemeConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Theme;
};

/** Page Info on the &quot;RootQueryToThemeConnection&quot; */
export type RootQueryToThemeConnectionPageInfo = PageInfo & ThemeConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToThemeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Connection between the RootQuery type and the User type */
export type RootQueryToUserConnection = Connection & UserConnection & {
  __typename?: 'RootQueryToUserConnection';
  /** Edges for the RootQueryToUserConnection connection */
  edges: Array<RootQueryToUserConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<User>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToUserConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToUserConnectionEdge = Edge & UserConnectionEdge & {
  __typename?: 'RootQueryToUserConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: User;
};

/** Page Info on the &quot;RootQueryToUserConnection&quot; */
export type RootQueryToUserConnectionPageInfo = PageInfo & UserConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToUserConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the RootQueryToUserConnection connection */
export type RootQueryToUserConnectionWhereArgs = {
  /** Array of userIds to exclude. */
  exclude: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** Pass an array of post types to filter results to users who have published posts in those post types. */
  hasPublishedPosts: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of userIds to include. */
  include: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** The user login. */
  login: InputMaybe<Scalars['String']['input']>;
  /** An array of logins to include. Users matching one of these logins will be included in results. */
  loginIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** An array of logins to exclude. Users matching one of these logins will not be included in results. */
  loginNotIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** The user nicename. */
  nicename: InputMaybe<Scalars['String']['input']>;
  /** An array of nicenames to include. Users matching one of these nicenames will be included in results. */
  nicenameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** An array of nicenames to exclude. Users matching one of these nicenames will not be included in results. */
  nicenameNotIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<UsersConnectionOrderbyInput>>>;
  /** An array of role names that users must match to be included in results. Note that this is an inclusive list: users must match *each* role. */
  role: InputMaybe<UserRoleEnum>;
  /** An array of role names. Matched users must have at least one of these roles. */
  roleIn: InputMaybe<Array<InputMaybe<UserRoleEnum>>>;
  /** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
  roleNotIn: InputMaybe<Array<InputMaybe<UserRoleEnum>>>;
  /** Search keyword. Searches for possible string matches on columns. When "searchColumns" is left empty, it tries to determine which column to search in based on search string. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
  searchColumns: InputMaybe<Array<InputMaybe<UsersConnectionSearchColumnEnum>>>;
};

/** Connection between the RootQuery type and the UserRole type */
export type RootQueryToUserRoleConnection = Connection & UserRoleConnection & {
  __typename?: 'RootQueryToUserRoleConnection';
  /** Edges for the RootQueryToUserRoleConnection connection */
  edges: Array<RootQueryToUserRoleConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<UserRole>;
  /** Information about pagination in a connection. */
  pageInfo: RootQueryToUserRoleConnectionPageInfo;
};

/** An edge in a connection */
export type RootQueryToUserRoleConnectionEdge = Edge & UserRoleConnectionEdge & {
  __typename?: 'RootQueryToUserRoleConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: UserRole;
};

/** Page Info on the &quot;RootQueryToUserRoleConnection&quot; */
export type RootQueryToUserRoleConnectionPageInfo = PageInfo & UserRoleConnectionPageInfo & WpPageInfo & {
  __typename?: 'RootQueryToUserRoleConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** The strategy to use when loading the script */
export enum ScriptLoadingStrategyEnum {
  /** Use the script `async` attribute */
  Async = 'ASYNC',
  /** Use the script `defer` attribute */
  Defer = 'DEFER'
}

/** Input for the sendPasswordResetEmail mutation. */
export type SendPasswordResetEmailInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** A string that contains the user's username or email address. */
  username: Scalars['String']['input'];
};

/** The payload for the sendPasswordResetEmail mutation. */
export type SendPasswordResetEmailPayload = {
  __typename?: 'SendPasswordResetEmailPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** Whether the mutation completed successfully. This does NOT necessarily mean that an email was sent. */
  success: Maybe<Scalars['Boolean']['output']>;
  /**
   * The user that the password reset email was sent to
   * @deprecated This field will be removed in a future version of WPGraphQL
   */
  user: Maybe<User>;
};

/** All of the registered settings */
export type Settings = {
  __typename?: 'Settings';
  /** Settings of the the string Settings Group */
  discussionSettingsDefaultCommentStatus: Maybe<Scalars['String']['output']>;
  /** Settings of the the string Settings Group */
  discussionSettingsDefaultPingStatus: Maybe<Scalars['String']['output']>;
  /** Settings of the the string Settings Group */
  generalSettingsDateFormat: Maybe<Scalars['String']['output']>;
  /** Settings of the the string Settings Group */
  generalSettingsDescription: Maybe<Scalars['String']['output']>;
  /** Settings of the the string Settings Group */
  generalSettingsEmail: Maybe<Scalars['String']['output']>;
  /** Settings of the the string Settings Group */
  generalSettingsLanguage: Maybe<Scalars['String']['output']>;
  /** Settings of the the integer Settings Group */
  generalSettingsStartOfWeek: Maybe<Scalars['Int']['output']>;
  /** Settings of the the string Settings Group */
  generalSettingsTimeFormat: Maybe<Scalars['String']['output']>;
  /** Settings of the the string Settings Group */
  generalSettingsTimezone: Maybe<Scalars['String']['output']>;
  /** Settings of the the string Settings Group */
  generalSettingsTitle: Maybe<Scalars['String']['output']>;
  /** Settings of the the string Settings Group */
  generalSettingsUrl: Maybe<Scalars['String']['output']>;
  /** Settings of the the integer Settings Group */
  readingSettingsPageForPosts: Maybe<Scalars['Int']['output']>;
  /** Settings of the the integer Settings Group */
  readingSettingsPageOnFront: Maybe<Scalars['Int']['output']>;
  /** Settings of the the integer Settings Group */
  readingSettingsPostsPerPage: Maybe<Scalars['Int']['output']>;
  /** Settings of the the string Settings Group */
  readingSettingsShowOnFront: Maybe<Scalars['String']['output']>;
  /** Settings of the the integer Settings Group */
  writingSettingsDefaultCategory: Maybe<Scalars['Int']['output']>;
  /** Settings of the the string Settings Group */
  writingSettingsDefaultPostFormat: Maybe<Scalars['String']['output']>;
  /** Settings of the the boolean Settings Group */
  writingSettingsUseSmilies: Maybe<Scalars['Boolean']['output']>;
};

/** The tag type */
export type Tag = DatabaseIdentifier & MenuItemLinkable & Node & TermNode & UniformResourceIdentifiable & {
  __typename?: 'Tag';
  /** Connection between the Tag type and the ContentNode type */
  contentNodes: Maybe<TagToContentNodeConnection>;
  /** The number of objects connected to the object */
  count: Maybe<Scalars['Int']['output']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** The description of the object */
  description: Maybe<Scalars['String']['output']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The globally unique ID for the object */
  id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is restricted from the current viewer */
  isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** The link to the term */
  link: Maybe<Scalars['String']['output']>;
  /** The human friendly name of the object. */
  name: Maybe<Scalars['String']['output']>;
  /** Connection between the Tag type and the post type */
  posts: Maybe<TagToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug: Maybe<Scalars['String']['output']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of databaseId
   */
  tagId: Maybe<Scalars['Int']['output']>;
  /** Connection between the Tag type and the Taxonomy type */
  taxonomy: Maybe<TagToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName: Maybe<Scalars['String']['output']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId: Maybe<Scalars['Int']['output']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId: Maybe<Scalars['Int']['output']>;
  /** The unique resource identifier path */
  uri: Maybe<Scalars['String']['output']>;
};


/** The tag type */
export type TagContentNodesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<TagToContentNodeConnectionWhereArgs>;
};


/** The tag type */
export type TagEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The tag type */
export type TagEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The tag type */
export type TagPostsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<TagToPostConnectionWhereArgs>;
};

/** Connection to tag Nodes */
export type TagConnection = {
  /** A list of edges (relational context) between RootQuery and connected tag Nodes */
  edges: Array<TagConnectionEdge>;
  /** A list of connected tag Nodes */
  nodes: Array<Tag>;
  /** Information about pagination in a connection. */
  pageInfo: TagConnectionPageInfo;
};

/** Edge between a Node and a connected tag */
export type TagConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected tag Node */
  node: Tag;
};

/** Page Info on the connected TagConnectionEdge */
export type TagConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum TagIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the Tag type and the ContentNode type */
export type TagToContentNodeConnection = Connection & ContentNodeConnection & {
  __typename?: 'TagToContentNodeConnection';
  /** Edges for the TagToContentNodeConnection connection */
  edges: Array<TagToContentNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: TagToContentNodeConnectionPageInfo;
};

/** An edge in a connection */
export type TagToContentNodeConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'TagToContentNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;TagToContentNodeConnection&quot; */
export type TagToContentNodeConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'TagToContentNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the TagToContentNodeConnection connection */
export type TagToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes: InputMaybe<Array<InputMaybe<ContentTypesOfTagEnum>>>;
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the Tag type and the post type */
export type TagToPostConnection = Connection & PostConnection & {
  __typename?: 'TagToPostConnection';
  /** Edges for the TagToPostConnection connection */
  edges: Array<TagToPostConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: TagToPostConnectionPageInfo;
};

/** An edge in a connection */
export type TagToPostConnectionEdge = Edge & PostConnectionEdge & {
  __typename?: 'TagToPostConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Post;
};

/** Page Info on the &quot;TagToPostConnection&quot; */
export type TagToPostConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  __typename?: 'TagToPostConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the TagToPostConnection connection */
export type TagToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Category ID */
  categoryId: InputMaybe<Scalars['Int']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Use Category Slug */
  categoryName: InputMaybe<Scalars['String']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag: InputMaybe<Scalars['String']['input']>;
  /** Use Tag ID */
  tagId: InputMaybe<Scalars['String']['input']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the Tag type and the Taxonomy type */
export type TagToTaxonomyConnectionEdge = Edge & OneToOneConnection & TaxonomyConnectionEdge & {
  __typename?: 'TagToTaxonomyConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  node: Taxonomy;
};

/** A taxonomy object */
export type Taxonomy = Node & {
  __typename?: 'Taxonomy';
  /** List of Content Types associated with the Taxonomy */
  connectedContentTypes: Maybe<TaxonomyToContentTypeConnection>;
  /** List of Term Nodes associated with the Taxonomy */
  connectedTerms: Maybe<TaxonomyToTermNodeConnection>;
  /** Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description */
  description: Maybe<Scalars['String']['output']>;
  /** The plural name of the post type within the GraphQL Schema. */
  graphqlPluralName: Maybe<Scalars['String']['output']>;
  /** The singular name of the post type within the GraphQL Schema. */
  graphqlSingleName: Maybe<Scalars['String']['output']>;
  /** Whether the taxonomy is hierarchical */
  hierarchical: Maybe<Scalars['Boolean']['output']>;
  /** The globally unique identifier of the taxonomy object. */
  id: Scalars['ID']['output'];
  /** Whether the object is restricted from the current viewer */
  isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Name of the taxonomy shown in the menu. Usually plural. */
  label: Maybe<Scalars['String']['output']>;
  /** The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label */
  name: Maybe<Scalars['String']['output']>;
  /** Whether the taxonomy is publicly queryable */
  public: Maybe<Scalars['Boolean']['output']>;
  /** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
  restBase: Maybe<Scalars['String']['output']>;
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass: Maybe<Scalars['String']['output']>;
  /** Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud */
  showCloud: Maybe<Scalars['Boolean']['output']>;
  /** Whether to display a column for the taxonomy on its post type listing screens. */
  showInAdminColumn: Maybe<Scalars['Boolean']['output']>;
  /** Whether to add the post type to the GraphQL Schema. */
  showInGraphql: Maybe<Scalars['Boolean']['output']>;
  /** Whether to show the taxonomy in the admin menu */
  showInMenu: Maybe<Scalars['Boolean']['output']>;
  /** Whether the taxonomy is available for selection in navigation menus. */
  showInNavMenus: Maybe<Scalars['Boolean']['output']>;
  /** Whether to show the taxonomy in the quick/bulk edit panel. */
  showInQuickEdit: Maybe<Scalars['Boolean']['output']>;
  /** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
  showInRest: Maybe<Scalars['Boolean']['output']>;
  /** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
  showUi: Maybe<Scalars['Boolean']['output']>;
};


/** A taxonomy object */
export type TaxonomyConnectedContentTypesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** A taxonomy object */
export type TaxonomyConnectedTermsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** Connection to Taxonomy Nodes */
export type TaxonomyConnection = {
  /** A list of edges (relational context) between RootQuery and connected Taxonomy Nodes */
  edges: Array<TaxonomyConnectionEdge>;
  /** A list of connected Taxonomy Nodes */
  nodes: Array<Taxonomy>;
  /** Information about pagination in a connection. */
  pageInfo: TaxonomyConnectionPageInfo;
};

/** Edge between a Node and a connected Taxonomy */
export type TaxonomyConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected Taxonomy Node */
  node: Taxonomy;
};

/** Page Info on the connected TaxonomyConnectionEdge */
export type TaxonomyConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Allowed taxonomies */
export enum TaxonomyEnum {
  /** Taxonomy enum category */
  Category = 'CATEGORY',
  /** Taxonomy enum graphql_document_group */
  Graphqldocumentgroup = 'GRAPHQLDOCUMENTGROUP',
  /** Taxonomy enum item_categories */
  Itemtype = 'ITEMTYPE',
  /** Taxonomy enum post_format */
  Postformat = 'POSTFORMAT',
  /** Taxonomy enum post_tag */
  Tag = 'TAG'
}

/** The Type of Identifier used to fetch a single Taxonomy node. To be used along with the "id" field. Default is "ID". */
export enum TaxonomyIdTypeEnum {
  /** The globally unique ID */
  Id = 'ID',
  /** The name of the taxonomy */
  Name = 'NAME'
}

/** Connection between the Taxonomy type and the ContentType type */
export type TaxonomyToContentTypeConnection = Connection & ContentTypeConnection & {
  __typename?: 'TaxonomyToContentTypeConnection';
  /** Edges for the TaxonomyToContentTypeConnection connection */
  edges: Array<TaxonomyToContentTypeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentType>;
  /** Information about pagination in a connection. */
  pageInfo: TaxonomyToContentTypeConnectionPageInfo;
};

/** An edge in a connection */
export type TaxonomyToContentTypeConnectionEdge = ContentTypeConnectionEdge & Edge & {
  __typename?: 'TaxonomyToContentTypeConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: ContentType;
};

/** Page Info on the &quot;TaxonomyToContentTypeConnection&quot; */
export type TaxonomyToContentTypeConnectionPageInfo = ContentTypeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'TaxonomyToContentTypeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Connection between the Taxonomy type and the TermNode type */
export type TaxonomyToTermNodeConnection = Connection & TermNodeConnection & {
  __typename?: 'TaxonomyToTermNodeConnection';
  /** Edges for the TaxonomyToTermNodeConnection connection */
  edges: Array<TaxonomyToTermNodeConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<TermNode>;
  /** Information about pagination in a connection. */
  pageInfo: TaxonomyToTermNodeConnectionPageInfo;
};

/** An edge in a connection */
export type TaxonomyToTermNodeConnectionEdge = Edge & TermNodeConnectionEdge & {
  __typename?: 'TaxonomyToTermNodeConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: TermNode;
};

/** Page Info on the &quot;TaxonomyToTermNodeConnection&quot; */
export type TaxonomyToTermNodeConnectionPageInfo = PageInfo & TermNodeConnectionPageInfo & WpPageInfo & {
  __typename?: 'TaxonomyToTermNodeConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** The team type */
export type Team = ContentNode & DatabaseIdentifier & MenuItemLinkable & Node & NodeWithExcerpt & NodeWithRevisions & NodeWithTemplate & NodeWithTitle & Previewable & UniformResourceIdentifiable & WithAcfGuideFields & WithAcfTeamFields & {
  __typename?: 'Team';
  /**
   * The ancestors of the content node.
   * @deprecated This content type is not hierarchical and typically will not have ancestors
   */
  ancestors: Maybe<TeamToTeamConnection>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String']['output'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** Post publishing date. */
  date: Maybe<Scalars['String']['output']>;
  /** The publishing date set in GMT. */
  dateGmt: Maybe<Scalars['String']['output']>;
  /** The desired slug of the post */
  desiredSlug: Maybe<Scalars['String']['output']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure: Maybe<Scalars['String']['output']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The excerpt of the post. */
  excerpt: Maybe<Scalars['String']['output']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid: Maybe<Scalars['String']['output']>;
  /** Fields of the GuideFields ACF Field Group */
  guideFields: Maybe<GuideFields>;
  /** Whether the teams object is password protected. */
  hasPassword: Maybe<Scalars['Boolean']['output']>;
  /** The globally unique identifier of the teams object. */
  id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is a node in the preview state */
  isPreview: Maybe<Scalars['Boolean']['output']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** True if the node is a revision of another node */
  isRevision: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** The user that most recently edited the node */
  lastEditedBy: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link: Maybe<Scalars['String']['output']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified: Maybe<Scalars['String']['output']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt: Maybe<Scalars['String']['output']>;
  /**
   * The parent of the content node.
   * @deprecated This content type is not hierarchical and typically will not have a parent
   */
  parent: Maybe<TeamToParentConnectionEdge>;
  /** The password for the teams object. */
  password: Maybe<Scalars['String']['output']>;
  /** Connection between the Team type and the team type */
  preview: Maybe<TeamToPreviewConnectionEdge>;
  /** The database id of the preview node */
  previewRevisionDatabaseId: Maybe<Scalars['Int']['output']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId: Maybe<Scalars['ID']['output']>;
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  revisionOf: Maybe<NodeWithRevisionsToContentNodeConnectionEdge>;
  /** Connection between the Team type and the team type */
  revisions: Maybe<TeamToRevisionConnection>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug: Maybe<Scalars['String']['output']>;
  /** The current status of the object */
  status: Maybe<Scalars['String']['output']>;
  /** Fields of the TeamFields ACF Field Group */
  teamFields: Maybe<TeamFields>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  teamId: Scalars['Int']['output'];
  /** The template assigned to the node */
  template: Maybe<ContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title: Maybe<Scalars['String']['output']>;
  /** The unique resource identifier path */
  uri: Maybe<Scalars['String']['output']>;
};


/** The team type */
export type TeamAncestorsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The team type */
export type TeamEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The team type */
export type TeamEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The team type */
export type TeamExcerptArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};


/** The team type */
export type TeamRevisionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<TeamToRevisionConnectionWhereArgs>;
};


/** The team type */
export type TeamTitleArgs = {
  format: InputMaybe<PostObjectFieldFormatEnum>;
};

/** Connection to team Nodes */
export type TeamConnection = {
  /** A list of edges (relational context) between RootQuery and connected team Nodes */
  edges: Array<TeamConnectionEdge>;
  /** A list of connected team Nodes */
  nodes: Array<Team>;
  /** Information about pagination in a connection. */
  pageInfo: TeamConnectionPageInfo;
};

/** Edge between a Node and a connected team */
export type TeamConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected team Node */
  node: Team;
};

/** Page Info on the connected TeamConnectionEdge */
export type TeamConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** The &quot;TeamFields&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type TeamFields = AcfFieldGroup & AcfFieldGroupFields & TeamFields_Fields & {
  __typename?: 'TeamFields';
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;TeamFields&quot; Field Group */
  composition: Maybe<Array<Maybe<TeamFieldsComposition>>>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;TeamFields&quot; Field Group */
  notes: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;TeamFields&quot; Field Group */
  teamDamage: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;radio&quot; Field Type added to the schema as part of the &quot;TeamFields&quot; Field Group */
  teamType: Maybe<Scalars['String']['output']>;
};

/** The &quot;TeamFieldsComposition&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type TeamFieldsComposition = AcfFieldGroup & AcfFieldGroupFields & TeamFieldsComposition_Fields & {
  __typename?: 'TeamFieldsComposition';
  /** Field of the &quot;post_object&quot; Field Type added to the schema as part of the &quot;TeamFieldsComposition&quot; Field Group */
  accessory: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;TeamFieldsComposition&quot; Field Group */
  accessorySubstitutions: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;post_object&quot; Field Type added to the schema as part of the &quot;TeamFieldsComposition&quot; Field Group */
  cards: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;TeamFieldsComposition&quot; Field Group */
  cardsSubstitutions: Maybe<AcfContentNodeConnection>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;post_object&quot; Field Type added to the schema as part of the &quot;TeamFieldsComposition&quot; Field Group */
  hero: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;TeamFieldsComposition&quot; Field Group */
  heroSubstitutions: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;post_object&quot; Field Type added to the schema as part of the &quot;TeamFieldsComposition&quot; Field Group */
  merch: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;TeamFieldsComposition&quot; Field Group */
  merchSubstitutions: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;post_object&quot; Field Type added to the schema as part of the &quot;TeamFieldsComposition&quot; Field Group */
  relic: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;TeamFieldsComposition&quot; Field Group */
  relicSubstitutions: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;post_object&quot; Field Type added to the schema as part of the &quot;TeamFieldsComposition&quot; Field Group */
  shield: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;TeamFieldsComposition&quot; Field Group */
  shieldSubstitutions: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;post_object&quot; Field Type added to the schema as part of the &quot;TeamFieldsComposition&quot; Field Group */
  weapon: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;TeamFieldsComposition&quot; Field Group */
  weaponSubstitutions: Maybe<AcfContentNodeConnection>;
};


/** The &quot;TeamFieldsComposition&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type TeamFieldsCompositionAccessoryArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The &quot;TeamFieldsComposition&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type TeamFieldsCompositionAccessorySubstitutionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The &quot;TeamFieldsComposition&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type TeamFieldsCompositionCardsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The &quot;TeamFieldsComposition&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type TeamFieldsCompositionCardsSubstitutionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The &quot;TeamFieldsComposition&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type TeamFieldsCompositionHeroArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The &quot;TeamFieldsComposition&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type TeamFieldsCompositionHeroSubstitutionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The &quot;TeamFieldsComposition&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type TeamFieldsCompositionMerchArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The &quot;TeamFieldsComposition&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type TeamFieldsCompositionMerchSubstitutionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The &quot;TeamFieldsComposition&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type TeamFieldsCompositionRelicArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The &quot;TeamFieldsComposition&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type TeamFieldsCompositionRelicSubstitutionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The &quot;TeamFieldsComposition&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type TeamFieldsCompositionShieldArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The &quot;TeamFieldsComposition&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type TeamFieldsCompositionShieldSubstitutionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The &quot;TeamFieldsComposition&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type TeamFieldsCompositionWeaponArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** The &quot;TeamFieldsComposition&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type TeamFieldsCompositionWeaponSubstitutionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** Interface representing fields of the ACF &quot;TeamFieldsComposition&quot; Field Group */
export type TeamFieldsComposition_Fields = {
  /** Field of the &quot;post_object&quot; Field Type added to the schema as part of the &quot;TeamFieldsComposition&quot; Field Group */
  accessory: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;TeamFieldsComposition&quot; Field Group */
  accessorySubstitutions: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;post_object&quot; Field Type added to the schema as part of the &quot;TeamFieldsComposition&quot; Field Group */
  cards: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;TeamFieldsComposition&quot; Field Group */
  cardsSubstitutions: Maybe<AcfContentNodeConnection>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;post_object&quot; Field Type added to the schema as part of the &quot;TeamFieldsComposition&quot; Field Group */
  hero: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;TeamFieldsComposition&quot; Field Group */
  heroSubstitutions: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;post_object&quot; Field Type added to the schema as part of the &quot;TeamFieldsComposition&quot; Field Group */
  merch: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;TeamFieldsComposition&quot; Field Group */
  merchSubstitutions: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;post_object&quot; Field Type added to the schema as part of the &quot;TeamFieldsComposition&quot; Field Group */
  relic: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;TeamFieldsComposition&quot; Field Group */
  relicSubstitutions: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;post_object&quot; Field Type added to the schema as part of the &quot;TeamFieldsComposition&quot; Field Group */
  shield: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;TeamFieldsComposition&quot; Field Group */
  shieldSubstitutions: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;post_object&quot; Field Type added to the schema as part of the &quot;TeamFieldsComposition&quot; Field Group */
  weapon: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;TeamFieldsComposition&quot; Field Group */
  weaponSubstitutions: Maybe<AcfContentNodeConnection>;
};


/** Interface representing fields of the ACF &quot;TeamFieldsComposition&quot; Field Group */
export type TeamFieldsComposition_FieldsAccessoryArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** Interface representing fields of the ACF &quot;TeamFieldsComposition&quot; Field Group */
export type TeamFieldsComposition_FieldsAccessorySubstitutionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** Interface representing fields of the ACF &quot;TeamFieldsComposition&quot; Field Group */
export type TeamFieldsComposition_FieldsCardsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** Interface representing fields of the ACF &quot;TeamFieldsComposition&quot; Field Group */
export type TeamFieldsComposition_FieldsCardsSubstitutionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** Interface representing fields of the ACF &quot;TeamFieldsComposition&quot; Field Group */
export type TeamFieldsComposition_FieldsHeroArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** Interface representing fields of the ACF &quot;TeamFieldsComposition&quot; Field Group */
export type TeamFieldsComposition_FieldsHeroSubstitutionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** Interface representing fields of the ACF &quot;TeamFieldsComposition&quot; Field Group */
export type TeamFieldsComposition_FieldsMerchArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** Interface representing fields of the ACF &quot;TeamFieldsComposition&quot; Field Group */
export type TeamFieldsComposition_FieldsMerchSubstitutionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** Interface representing fields of the ACF &quot;TeamFieldsComposition&quot; Field Group */
export type TeamFieldsComposition_FieldsRelicArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** Interface representing fields of the ACF &quot;TeamFieldsComposition&quot; Field Group */
export type TeamFieldsComposition_FieldsRelicSubstitutionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** Interface representing fields of the ACF &quot;TeamFieldsComposition&quot; Field Group */
export type TeamFieldsComposition_FieldsShieldArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** Interface representing fields of the ACF &quot;TeamFieldsComposition&quot; Field Group */
export type TeamFieldsComposition_FieldsShieldSubstitutionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** Interface representing fields of the ACF &quot;TeamFieldsComposition&quot; Field Group */
export type TeamFieldsComposition_FieldsWeaponArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** Interface representing fields of the ACF &quot;TeamFieldsComposition&quot; Field Group */
export type TeamFieldsComposition_FieldsWeaponSubstitutionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** Interface representing fields of the ACF &quot;TeamFields&quot; Field Group */
export type TeamFields_Fields = {
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;TeamFields&quot; Field Group */
  composition: Maybe<Array<Maybe<TeamFieldsComposition>>>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;TeamFields&quot; Field Group */
  notes: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;TeamFields&quot; Field Group */
  teamDamage: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;radio&quot; Field Type added to the schema as part of the &quot;TeamFields&quot; Field Group */
  teamType: Maybe<Scalars['String']['output']>;
};

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum TeamIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a resource by the URI. */
  Uri = 'URI'
}

/** Connection between the Team type and the team type */
export type TeamToParentConnectionEdge = Edge & OneToOneConnection & TeamConnectionEdge & {
  __typename?: 'TeamToParentConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /**
   * The node of the connection, without the edges
   * @deprecated This content type is not hierarchical and typically will not have a parent
   */
  node: Team;
};

/** Connection between the Team type and the team type */
export type TeamToPreviewConnectionEdge = Edge & OneToOneConnection & TeamConnectionEdge & {
  __typename?: 'TeamToPreviewConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  node: Team;
};

/** Connection between the Team type and the team type */
export type TeamToRevisionConnection = Connection & TeamConnection & {
  __typename?: 'TeamToRevisionConnection';
  /** Edges for the TeamToRevisionConnection connection */
  edges: Array<TeamToRevisionConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Team>;
  /** Information about pagination in a connection. */
  pageInfo: TeamToRevisionConnectionPageInfo;
};

/** An edge in a connection */
export type TeamToRevisionConnectionEdge = Edge & TeamConnectionEdge & {
  __typename?: 'TeamToRevisionConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Team;
};

/** Page Info on the &quot;TeamToRevisionConnection&quot; */
export type TeamToRevisionConnectionPageInfo = PageInfo & TeamConnectionPageInfo & WpPageInfo & {
  __typename?: 'TeamToRevisionConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the TeamToRevisionConnection connection */
export type TeamToRevisionConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the Team type and the team type */
export type TeamToTeamConnection = Connection & TeamConnection & {
  __typename?: 'TeamToTeamConnection';
  /** Edges for the TeamToTeamConnection connection */
  edges: Array<TeamToTeamConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Team>;
  /** Information about pagination in a connection. */
  pageInfo: TeamToTeamConnectionPageInfo;
};

/** An edge in a connection */
export type TeamToTeamConnectionEdge = Edge & TeamConnectionEdge & {
  __typename?: 'TeamToTeamConnectionEdge';
  /**
   * A cursor for use in pagination
   * @deprecated This content type is not hierarchical and typically will not have ancestors
   */
  cursor: Maybe<Scalars['String']['output']>;
  /**
   * The item at the end of the edge
   * @deprecated This content type is not hierarchical and typically will not have ancestors
   */
  node: Team;
};

/** Page Info on the &quot;TeamToTeamConnection&quot; */
export type TeamToTeamConnectionPageInfo = PageInfo & TeamConnectionPageInfo & WpPageInfo & {
  __typename?: 'TeamToTeamConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Votes per hero team team option */
export type TeamVote = DatabaseIdentifier & Node & {
  __typename?: 'TeamVote';
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** The hero id */
  heroDatabaseId: Maybe<Scalars['Int']['output']>;
  /** The globally unique ID for the object */
  id: Scalars['ID']['output'];
  /** The IP address of the user */
  ipAddress: Maybe<Scalars['String']['output']>;
  /** Connection between the TeamVote type and the Team type */
  team: Maybe<TeamVoteToTeamConnectionEdge>;
  /** The team id */
  teamDatabaseId: Maybe<Scalars['Int']['output']>;
  /** 1 for upvote, 0 for downvote */
  upOrDown: Maybe<Scalars['Int']['output']>;
  /** Connection between the TeamVote type and the User type */
  user: Maybe<TeamVoteToUserConnectionEdge>;
  /** The user account associated with the vote */
  userDatabaseId: Maybe<Scalars['Int']['output']>;
};

/** Connection to TeamVote Nodes */
export type TeamVoteConnection = {
  /** A list of edges (relational context) between RootQuery and connected TeamVote Nodes */
  edges: Array<TeamVoteConnectionEdge>;
  /** A list of connected TeamVote Nodes */
  nodes: Array<TeamVote>;
  /** Information about pagination in a connection. */
  pageInfo: TeamVoteConnectionPageInfo;
};

/** Edge between a Node and a connected TeamVote */
export type TeamVoteConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected TeamVote Node */
  node: TeamVote;
};

/** Page Info on the connected TeamVoteConnectionEdge */
export type TeamVoteConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Team ID, Vote Count, Downvote Count, and Team Details */
export type TeamVoteCount = {
  __typename?: 'TeamVoteCount';
  /** The total number of downvotes */
  downvoteCount: Maybe<Scalars['Int']['output']>;
  /** The team details */
  team: Maybe<Team>;
  /** The team ID */
  teamId: Maybe<Scalars['Int']['output']>;
  /** The total number of votes */
  upvoteCount: Maybe<Scalars['Int']['output']>;
  /** The ID of the user */
  userId: Maybe<Scalars['Int']['output']>;
  /** The current user&#039;s vote status on the team: &quot;upvote&quot;, &quot;downvote&quot;, or &quot;none&quot; */
  userVote: Maybe<Scalars['String']['output']>;
};

/** Connection between the TeamVote type and the Team type */
export type TeamVoteToTeamConnectionEdge = Edge & OneToOneConnection & TeamConnectionEdge & {
  __typename?: 'TeamVoteToTeamConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  node: Team;
};

/** Connection between the TeamVote type and the User type */
export type TeamVoteToUserConnectionEdge = Edge & OneToOneConnection & UserConnectionEdge & {
  __typename?: 'TeamVoteToUserConnectionEdge';
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The node of the connection, without the edges */
  node: User;
};

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNode = {
  /** The number of objects connected to the object */
  count: Maybe<Scalars['Int']['output']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int']['output'];
  /** The description of the object */
  description: Maybe<Scalars['String']['output']>;
  /** Connection between the TermNode type and the EnqueuedScript type */
  enqueuedScripts: Maybe<TermNodeToEnqueuedScriptConnection>;
  /** Connection between the TermNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets: Maybe<TermNodeToEnqueuedStylesheetConnection>;
  /** The globally unique ID for the object */
  id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is restricted from the current viewer */
  isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** The link to the term */
  link: Maybe<Scalars['String']['output']>;
  /** The human friendly name of the object. */
  name: Maybe<Scalars['String']['output']>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug: Maybe<Scalars['String']['output']>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName: Maybe<Scalars['String']['output']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId: Maybe<Scalars['Int']['output']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId: Maybe<Scalars['Int']['output']>;
  /** The unique resource identifier path */
  uri: Maybe<Scalars['String']['output']>;
};


/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNodeEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNodeEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** Connection to TermNode Nodes */
export type TermNodeConnection = {
  /** A list of edges (relational context) between RootQuery and connected TermNode Nodes */
  edges: Array<TermNodeConnectionEdge>;
  /** A list of connected TermNode Nodes */
  nodes: Array<TermNode>;
  /** Information about pagination in a connection. */
  pageInfo: TermNodeConnectionPageInfo;
};

/** Edge between a Node and a connected TermNode */
export type TermNodeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected TermNode Node */
  node: TermNode;
};

/** Page Info on the connected TermNodeConnectionEdge */
export type TermNodeConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field. */
export enum TermNodeIdTypeEnum {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI'
}

/** Connection between the TermNode type and the EnqueuedScript type */
export type TermNodeToEnqueuedScriptConnection = Connection & EnqueuedScriptConnection & {
  __typename?: 'TermNodeToEnqueuedScriptConnection';
  /** Edges for the TermNodeToEnqueuedScriptConnection connection */
  edges: Array<TermNodeToEnqueuedScriptConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedScript>;
  /** Information about pagination in a connection. */
  pageInfo: TermNodeToEnqueuedScriptConnectionPageInfo;
};

/** An edge in a connection */
export type TermNodeToEnqueuedScriptConnectionEdge = Edge & EnqueuedScriptConnectionEdge & {
  __typename?: 'TermNodeToEnqueuedScriptConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: EnqueuedScript;
};

/** Page Info on the &quot;TermNodeToEnqueuedScriptConnection&quot; */
export type TermNodeToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'TermNodeToEnqueuedScriptConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Connection between the TermNode type and the EnqueuedStylesheet type */
export type TermNodeToEnqueuedStylesheetConnection = Connection & EnqueuedStylesheetConnection & {
  __typename?: 'TermNodeToEnqueuedStylesheetConnection';
  /** Edges for the TermNodeToEnqueuedStylesheetConnection connection */
  edges: Array<TermNodeToEnqueuedStylesheetConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedStylesheet>;
  /** Information about pagination in a connection. */
  pageInfo: TermNodeToEnqueuedStylesheetConnectionPageInfo;
};

/** An edge in a connection */
export type TermNodeToEnqueuedStylesheetConnectionEdge = Edge & EnqueuedStylesheetConnectionEdge & {
  __typename?: 'TermNodeToEnqueuedStylesheetConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: EnqueuedStylesheet;
};

/** Page Info on the &quot;TermNodeToEnqueuedStylesheetConnection&quot; */
export type TermNodeToEnqueuedStylesheetConnectionPageInfo = EnqueuedStylesheetConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'TermNodeToEnqueuedStylesheetConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Options for ordering the connection by */
export enum TermObjectsConnectionOrderbyEnum {
  /** Order the connection by item count. */
  Count = 'COUNT',
  /** Order the connection by description. */
  Description = 'DESCRIPTION',
  /** Order the connection by name. */
  Name = 'NAME',
  /** Order the connection by slug. */
  Slug = 'SLUG',
  /** Order the connection by term group. */
  TermGroup = 'TERM_GROUP',
  /** Order the connection by term id. */
  TermId = 'TERM_ID',
  /** Order the connection by term order. */
  TermOrder = 'TERM_ORDER'
}

/** A theme object */
export type Theme = Node & {
  __typename?: 'Theme';
  /** Name of the theme author(s), could also be a company name. This field is equivalent to WP_Theme-&gt;get( &quot;Author&quot; ). */
  author: Maybe<Scalars['String']['output']>;
  /** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;AuthorURI&quot; ). */
  authorUri: Maybe<Scalars['String']['output']>;
  /** The description of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Description&quot; ). */
  description: Maybe<Scalars['String']['output']>;
  /** The globally unique identifier of the theme object. */
  id: Scalars['ID']['output'];
  /** Whether the object is restricted from the current viewer */
  isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Display name of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Name&quot; ). */
  name: Maybe<Scalars['String']['output']>;
  /** The URL of the screenshot for the theme. The screenshot is intended to give an overview of what the theme looks like. This field is equivalent to WP_Theme-&gt;get_screenshot(). */
  screenshot: Maybe<Scalars['String']['output']>;
  /** The theme slug is used to internally match themes. Theme slugs can have subdirectories like: my-theme/sub-theme. This field is equivalent to WP_Theme-&gt;get_stylesheet(). */
  slug: Maybe<Scalars['String']['output']>;
  /** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;Tags&quot; ). */
  tags: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** A URI if the theme has a website associated with it. The Theme URI is handy for directing users to a theme site for support etc. This field is equivalent to WP_Theme-&gt;get( &quot;ThemeURI&quot; ). */
  themeUri: Maybe<Scalars['String']['output']>;
  /** The current version of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Version&quot; ). */
  version: Maybe<Scalars['String']['output']>;
};

/** Connection to Theme Nodes */
export type ThemeConnection = {
  /** A list of edges (relational context) between RootQuery and connected Theme Nodes */
  edges: Array<ThemeConnectionEdge>;
  /** A list of connected Theme Nodes */
  nodes: Array<Theme>;
  /** Information about pagination in a connection. */
  pageInfo: ThemeConnectionPageInfo;
};

/** Edge between a Node and a connected Theme */
export type ThemeConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected Theme Node */
  node: Theme;
};

/** Page Info on the connected ThemeConnectionEdge */
export type ThemeConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Any node that has a URI */
export type UniformResourceIdentifiable = {
  /** The globally unique ID for the object */
  id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean']['output'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** The unique resource identifier path */
  uri: Maybe<Scalars['String']['output']>;
};

/** Input for the updateCategory mutation. */
export type UpdateCategoryInput = {
  /** The slug that the category will be an alias of */
  aliasOf: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The description of the category object */
  description: InputMaybe<Scalars['String']['input']>;
  /** The ID of the category object to update */
  id: Scalars['ID']['input'];
  /** The name of the category object to mutate */
  name: InputMaybe<Scalars['String']['input']>;
  /** The ID of the category that should be set as the parent */
  parentId: InputMaybe<Scalars['ID']['input']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the updateCategory mutation. */
export type UpdateCategoryPayload = {
  __typename?: 'UpdateCategoryPayload';
  /** The created category */
  category: Maybe<Category>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
};

/** Input for the updateCollection mutation. */
export type UpdateCollectionInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date: InputMaybe<Scalars['String']['input']>;
  /** The excerpt of the object */
  excerpt: InputMaybe<Scalars['String']['input']>;
  /** The ID of the collection object */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock: InputMaybe<Scalars['Boolean']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder: InputMaybe<Scalars['Int']['input']>;
  /** The password used to protect the content of the object */
  password: InputMaybe<Scalars['String']['input']>;
  /** The slug of the object */
  slug: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the updateCollection mutation. */
export type UpdateCollectionPayload = {
  __typename?: 'UpdateCollectionPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The Post object mutation type. */
  collection: Maybe<Collection>;
};

/** Input for the updateComment mutation. */
export type UpdateCommentInput = {
  /** The approval status of the comment. */
  approved: InputMaybe<Scalars['String']['input']>;
  /** The name of the comment's author. */
  author: InputMaybe<Scalars['String']['input']>;
  /** The email of the comment's author. */
  authorEmail: InputMaybe<Scalars['String']['input']>;
  /** The url of the comment's author. */
  authorUrl: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The database ID of the post object the comment belongs to. */
  commentOn: InputMaybe<Scalars['Int']['input']>;
  /** Content of the comment. */
  content: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date: InputMaybe<Scalars['String']['input']>;
  /** The ID of the comment being updated. */
  id: Scalars['ID']['input'];
  /** Parent comment ID of current comment. */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** The approval status of the comment */
  status: InputMaybe<CommentStatusEnum>;
  /** Type of comment. */
  type: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the updateComment mutation. */
export type UpdateCommentPayload = {
  __typename?: 'UpdateCommentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The comment that was created */
  comment: Maybe<Comment>;
  /** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
  success: Maybe<Scalars['Boolean']['output']>;
};

/** Input for the updateGraphqlDocumentGroup mutation. */
export type UpdateGraphqlDocumentGroupInput = {
  /** The slug that the graphql_document_group will be an alias of */
  aliasOf: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The description of the graphql_document_group object */
  description: InputMaybe<Scalars['String']['input']>;
  /** The ID of the graphqlDocumentGroup object to update */
  id: Scalars['ID']['input'];
  /** The name of the graphql_document_group object to mutate */
  name: InputMaybe<Scalars['String']['input']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the updateGraphqlDocumentGroup mutation. */
export type UpdateGraphqlDocumentGroupPayload = {
  __typename?: 'UpdateGraphqlDocumentGroupPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The created graphql_document_group */
  graphqlDocumentGroup: Maybe<GraphqlDocumentGroup>;
};

/** Input for the updateGraphqlDocument mutation. */
export type UpdateGraphqlDocumentInput = {
  /** Alias names for saved GraphQL query documents */
  alias: InputMaybe<Array<Scalars['String']['input']>>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The content of the object */
  content: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date: InputMaybe<Scalars['String']['input']>;
  /** Description for the saved GraphQL document */
  description: InputMaybe<Scalars['String']['input']>;
  /** Allow, deny or default access grant for specific query */
  grant: InputMaybe<Scalars['String']['input']>;
  /** Set connections between the graphqlDocument and graphqlDocumentGroups */
  graphqlDocumentGroups: InputMaybe<GraphqlDocumentGraphqlDocumentGroupsInput>;
  /** The ID of the graphqlDocument object */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock: InputMaybe<Scalars['Boolean']['input']>;
  /** HTTP Cache-Control max-age directive for a saved GraphQL document */
  maxAgeHeader: InputMaybe<Scalars['Int']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder: InputMaybe<Scalars['Int']['input']>;
  /** The password used to protect the content of the object */
  password: InputMaybe<Scalars['String']['input']>;
  /** The slug of the object */
  slug: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the updateGraphqlDocument mutation. */
export type UpdateGraphqlDocumentPayload = {
  __typename?: 'UpdateGraphqlDocumentPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The Post object mutation type. */
  graphqlDocument: Maybe<GraphqlDocument>;
};

/** Input for the updateHero mutation. */
export type UpdateHeroInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The comment status for the object */
  commentStatus: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date: InputMaybe<Scalars['String']['input']>;
  /** The excerpt of the object */
  excerpt: InputMaybe<Scalars['String']['input']>;
  /** The ID of the hero object */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock: InputMaybe<Scalars['Boolean']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder: InputMaybe<Scalars['Int']['input']>;
  /** The password used to protect the content of the object */
  password: InputMaybe<Scalars['String']['input']>;
  /** The slug of the object */
  slug: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the updateHero mutation. */
export type UpdateHeroPayload = {
  __typename?: 'UpdateHeroPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The Post object mutation type. */
  hero: Maybe<Hero>;
};

/** Input for the updateItem mutation. */
export type UpdateItemInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The comment status for the object */
  commentStatus: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date: InputMaybe<Scalars['String']['input']>;
  /** The excerpt of the object */
  excerpt: InputMaybe<Scalars['String']['input']>;
  /** The ID of the item object */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock: InputMaybe<Scalars['Boolean']['input']>;
  /** Set connections between the item and itemTypes */
  itemTypes: InputMaybe<ItemItemTypesInput>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder: InputMaybe<Scalars['Int']['input']>;
  /** The password used to protect the content of the object */
  password: InputMaybe<Scalars['String']['input']>;
  /** The slug of the object */
  slug: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the updateItem mutation. */
export type UpdateItemPayload = {
  __typename?: 'UpdateItemPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The Post object mutation type. */
  item: Maybe<Item>;
};

/** Input for the updateItemType mutation. */
export type UpdateItemTypeInput = {
  /** The slug that the item_categories will be an alias of */
  aliasOf: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The description of the item_categories object */
  description: InputMaybe<Scalars['String']['input']>;
  /** The ID of the itemType object to update */
  id: Scalars['ID']['input'];
  /** The name of the item_categories object to mutate */
  name: InputMaybe<Scalars['String']['input']>;
  /** The ID of the item_categories that should be set as the parent */
  parentId: InputMaybe<Scalars['ID']['input']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the updateItemType mutation. */
export type UpdateItemTypePayload = {
  __typename?: 'UpdateItemTypePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The created item_categories */
  itemType: Maybe<ItemType>;
};

/** Input for the updateMediaItem mutation. */
export type UpdateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  altText: InputMaybe<Scalars['String']['input']>;
  /** The userId to assign as the author of the mediaItem */
  authorId: InputMaybe<Scalars['ID']['input']>;
  /** The caption for the mediaItem */
  caption: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The comment status for the mediaItem */
  commentStatus: InputMaybe<Scalars['String']['input']>;
  /** The date of the mediaItem */
  date: InputMaybe<Scalars['String']['input']>;
  /** The date (in GMT zone) of the mediaItem */
  dateGmt: InputMaybe<Scalars['String']['input']>;
  /** Description of the mediaItem */
  description: InputMaybe<Scalars['String']['input']>;
  /** The file name of the mediaItem */
  filePath: InputMaybe<Scalars['String']['input']>;
  /** The file type of the mediaItem */
  fileType: InputMaybe<MimeTypeEnum>;
  /** The ID of the mediaItem object */
  id: Scalars['ID']['input'];
  /** The ID of the parent object */
  parentId: InputMaybe<Scalars['ID']['input']>;
  /** The ping status for the mediaItem */
  pingStatus: InputMaybe<Scalars['String']['input']>;
  /** The slug of the mediaItem */
  slug: InputMaybe<Scalars['String']['input']>;
  /** The status of the mediaItem */
  status: InputMaybe<MediaItemStatusEnum>;
  /** The title of the mediaItem */
  title: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the updateMediaItem mutation. */
export type UpdateMediaItemPayload = {
  __typename?: 'UpdateMediaItemPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The MediaItem object mutation type. */
  mediaItem: Maybe<MediaItem>;
};

/** Input for the updatePage mutation. */
export type UpdatePageInput = {
  /** The userId to assign as the author of the object */
  authorId: InputMaybe<Scalars['ID']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The comment status for the object */
  commentStatus: InputMaybe<Scalars['String']['input']>;
  /** The content of the object */
  content: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date: InputMaybe<Scalars['String']['input']>;
  /** The ID of the page object */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock: InputMaybe<Scalars['Boolean']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder: InputMaybe<Scalars['Int']['input']>;
  /** The ID of the parent object */
  parentId: InputMaybe<Scalars['ID']['input']>;
  /** The password used to protect the content of the object */
  password: InputMaybe<Scalars['String']['input']>;
  /** The slug of the object */
  slug: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the updatePage mutation. */
export type UpdatePagePayload = {
  __typename?: 'UpdatePagePayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The Post object mutation type. */
  page: Maybe<Page>;
};

/** Input for the updatePostFormat mutation. */
export type UpdatePostFormatInput = {
  /** The slug that the post_format will be an alias of */
  aliasOf: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The description of the post_format object */
  description: InputMaybe<Scalars['String']['input']>;
  /** The ID of the postFormat object to update */
  id: Scalars['ID']['input'];
  /** The name of the post_format object to mutate */
  name: InputMaybe<Scalars['String']['input']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the updatePostFormat mutation. */
export type UpdatePostFormatPayload = {
  __typename?: 'UpdatePostFormatPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The created post_format */
  postFormat: Maybe<PostFormat>;
};

/** Input for the updatePost mutation. */
export type UpdatePostInput = {
  /** The userId to assign as the author of the object */
  authorId: InputMaybe<Scalars['ID']['input']>;
  /** Set connections between the post and categories */
  categories: InputMaybe<PostCategoriesInput>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The comment status for the object */
  commentStatus: InputMaybe<Scalars['String']['input']>;
  /** The content of the object */
  content: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date: InputMaybe<Scalars['String']['input']>;
  /** The excerpt of the object */
  excerpt: InputMaybe<Scalars['String']['input']>;
  /** The ID of the post object */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock: InputMaybe<Scalars['Boolean']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder: InputMaybe<Scalars['Int']['input']>;
  /** The password used to protect the content of the object */
  password: InputMaybe<Scalars['String']['input']>;
  /** The ping status for the object */
  pingStatus: InputMaybe<Scalars['String']['input']>;
  /** URLs that have been pinged. */
  pinged: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Set connections between the post and postFormats */
  postFormats: InputMaybe<PostPostFormatsInput>;
  /** The slug of the object */
  slug: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status: InputMaybe<PostStatusEnum>;
  /** Set connections between the post and tags */
  tags: InputMaybe<PostTagsInput>;
  /** The title of the object */
  title: InputMaybe<Scalars['String']['input']>;
  /** URLs queued to be pinged. */
  toPing: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** The payload for the updatePost mutation. */
export type UpdatePostPayload = {
  __typename?: 'UpdatePostPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The Post object mutation type. */
  post: Maybe<Post>;
};

/** Input for the updateSettings mutation. */
export type UpdateSettingsInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** Allow people to submit comments on new posts. */
  discussionSettingsDefaultCommentStatus: InputMaybe<Scalars['String']['input']>;
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  discussionSettingsDefaultPingStatus: InputMaybe<Scalars['String']['input']>;
  /** A date format for all date strings. */
  generalSettingsDateFormat: InputMaybe<Scalars['String']['input']>;
  /** Site tagline. */
  generalSettingsDescription: InputMaybe<Scalars['String']['input']>;
  /** This address is used for admin purposes, like new user notification. */
  generalSettingsEmail: InputMaybe<Scalars['String']['input']>;
  /** WordPress locale code. */
  generalSettingsLanguage: InputMaybe<Scalars['String']['input']>;
  /** A day number of the week that the week should start on. */
  generalSettingsStartOfWeek: InputMaybe<Scalars['Int']['input']>;
  /** A time format for all time strings. */
  generalSettingsTimeFormat: InputMaybe<Scalars['String']['input']>;
  /** A city in the same timezone as you. */
  generalSettingsTimezone: InputMaybe<Scalars['String']['input']>;
  /** Site title. */
  generalSettingsTitle: InputMaybe<Scalars['String']['input']>;
  /** Site URL. */
  generalSettingsUrl: InputMaybe<Scalars['String']['input']>;
  /** The ID of the page that should display the latest posts */
  readingSettingsPageForPosts: InputMaybe<Scalars['Int']['input']>;
  /** The ID of the page that should be displayed on the front page */
  readingSettingsPageOnFront: InputMaybe<Scalars['Int']['input']>;
  /** Blog pages show at most. */
  readingSettingsPostsPerPage: InputMaybe<Scalars['Int']['input']>;
  /** What to show on the front page */
  readingSettingsShowOnFront: InputMaybe<Scalars['String']['input']>;
  /** Default post category. */
  writingSettingsDefaultCategory: InputMaybe<Scalars['Int']['input']>;
  /** Default post format. */
  writingSettingsDefaultPostFormat: InputMaybe<Scalars['String']['input']>;
  /** Convert emoticons like :-) and :-P to graphics on display. */
  writingSettingsUseSmilies: InputMaybe<Scalars['Boolean']['input']>;
};

/** The payload for the updateSettings mutation. */
export type UpdateSettingsPayload = {
  __typename?: 'UpdateSettingsPayload';
  /** Update all settings. */
  allSettings: Maybe<Settings>;
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** Update the DiscussionSettings setting. */
  discussionSettings: Maybe<DiscussionSettings>;
  /** Update the GeneralSettings setting. */
  generalSettings: Maybe<GeneralSettings>;
  /** Update the ReadingSettings setting. */
  readingSettings: Maybe<ReadingSettings>;
  /** Update the WritingSettings setting. */
  writingSettings: Maybe<WritingSettings>;
};

/** Input for the updateTag mutation. */
export type UpdateTagInput = {
  /** The slug that the post_tag will be an alias of */
  aliasOf: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The description of the post_tag object */
  description: InputMaybe<Scalars['String']['input']>;
  /** The ID of the tag object to update */
  id: Scalars['ID']['input'];
  /** The name of the post_tag object to mutate */
  name: InputMaybe<Scalars['String']['input']>;
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the updateTag mutation. */
export type UpdateTagPayload = {
  __typename?: 'UpdateTagPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The created post_tag */
  tag: Maybe<Tag>;
};

/** Input for the updateTeam mutation. */
export type UpdateTeamInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date: InputMaybe<Scalars['String']['input']>;
  /** The excerpt of the object */
  excerpt: InputMaybe<Scalars['String']['input']>;
  /** The ID of the team object */
  id: Scalars['ID']['input'];
  /** Override the edit lock when another user is editing the post */
  ignoreEditLock: InputMaybe<Scalars['Boolean']['input']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder: InputMaybe<Scalars['Int']['input']>;
  /** The password used to protect the content of the object */
  password: InputMaybe<Scalars['String']['input']>;
  /** The slug of the object */
  slug: InputMaybe<Scalars['String']['input']>;
  /** The status of the object */
  status: InputMaybe<PostStatusEnum>;
  /** The title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the updateTeam mutation. */
export type UpdateTeamPayload = {
  __typename?: 'UpdateTeamPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The Post object mutation type. */
  team: Maybe<Team>;
};

/** Input for the updateUser mutation. */
export type UpdateUserInput = {
  /** User's AOL IM account. */
  aim: InputMaybe<Scalars['String']['input']>;
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** A string containing content about the user. */
  description: InputMaybe<Scalars['String']['input']>;
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName: InputMaybe<Scalars['String']['input']>;
  /** A string containing the user's email address. */
  email: InputMaybe<Scalars['String']['input']>;
  /** 	The user's first name. */
  firstName: InputMaybe<Scalars['String']['input']>;
  /** The ID of the user */
  id: Scalars['ID']['input'];
  /** User's Jabber account. */
  jabber: InputMaybe<Scalars['String']['input']>;
  /** The user's last name. */
  lastName: InputMaybe<Scalars['String']['input']>;
  /** User's locale. */
  locale: InputMaybe<Scalars['String']['input']>;
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename: InputMaybe<Scalars['String']['input']>;
  /** The user's nickname, defaults to the user's username. */
  nickname: InputMaybe<Scalars['String']['input']>;
  /** A string that contains the plain text password for the user. */
  password: InputMaybe<Scalars['String']['input']>;
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered: InputMaybe<Scalars['String']['input']>;
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing: InputMaybe<Scalars['String']['input']>;
  /** An array of roles to be assigned to the user. */
  roles: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** A string containing the user's URL for the user's web site. */
  websiteUrl: InputMaybe<Scalars['String']['input']>;
  /** User's Yahoo IM account. */
  yim: InputMaybe<Scalars['String']['input']>;
};

/** The payload for the updateUser mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The User object mutation type. */
  user: Maybe<User>;
};

/** Input for the upvoteTeam mutation. */
export type UpvoteTeamInput = {
  /** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: InputMaybe<Scalars['String']['input']>;
  /** The ID of the hero */
  heroId: InputMaybe<Scalars['Int']['input']>;
  /** The IP address of the voter */
  ipAddress: InputMaybe<Scalars['String']['input']>;
  /** The ID of the team */
  teamId: InputMaybe<Scalars['Int']['input']>;
  /** The ID of the user */
  userId: InputMaybe<Scalars['Int']['input']>;
};

/** The payload for the upvoteTeam mutation. */
export type UpvoteTeamPayload = {
  __typename?: 'UpvoteTeamPayload';
  /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
  clientMutationId: Maybe<Scalars['String']['output']>;
  /** The current vote status after the operation */
  currentVote: Maybe<Scalars['String']['output']>;
  /** True if the vote was successful */
  success: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the team */
  teamId: Maybe<Scalars['Int']['output']>;
};

/** A User object */
export type User = Commenter & DatabaseIdentifier & Node & UniformResourceIdentifiable & {
  __typename?: 'User';
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar: Maybe<Avatar>;
  /** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
  capKey: Maybe<Scalars['String']['output']>;
  /** A list of capabilities (permissions) granted to the user */
  capabilities: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Connection between the User type and the Comment type */
  comments: Maybe<UserToCommentConnection>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int']['output'];
  /** Description of the user. */
  description: Maybe<Scalars['String']['output']>;
  /** Email address of the user. This is equivalent to the WP_User-&gt;user_email property. */
  email: Maybe<Scalars['String']['output']>;
  /** Connection between the User type and the EnqueuedScript type */
  enqueuedScripts: Maybe<UserToEnqueuedScriptConnection>;
  /** Connection between the User type and the EnqueuedStylesheet type */
  enqueuedStylesheets: Maybe<UserToEnqueuedStylesheetConnection>;
  /** A complete list of capabilities including capabilities inherited from a role. This is equivalent to the array keys of WP_User-&gt;allcaps. */
  extraCapabilities: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** First name of the user. This is equivalent to the WP_User-&gt;user_first_name property. */
  firstName: Maybe<Scalars['String']['output']>;
  /** The globally unique identifier for the user object. */
  id: Scalars['ID']['output'];
  /** Whether the node is a Comment */
  isComment: Scalars['Boolean']['output'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the node represents the front page. */
  isFrontPage: Scalars['Boolean']['output'];
  /** Whether  the node represents the blog page. */
  isPostsPage: Scalars['Boolean']['output'];
  /** Whether the object is restricted from the current viewer */
  isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property. */
  lastName: Maybe<Scalars['String']['output']>;
  /** The preferred language locale set for the user. Value derived from get_user_locale(). */
  locale: Maybe<Scalars['String']['output']>;
  /** Connection between the User type and the mediaItem type */
  mediaItems: Maybe<UserToMediaItemConnection>;
  /** Display name of the user. This is equivalent to the WP_User-&gt;display_name property. */
  name: Maybe<Scalars['String']['output']>;
  /** The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename */
  nicename: Maybe<Scalars['String']['output']>;
  /** Nickname of the user. */
  nickname: Maybe<Scalars['String']['output']>;
  /** Connection between the User type and the page type */
  pages: Maybe<UserToPageConnection>;
  /** Connection between the User type and the post type */
  posts: Maybe<UserToPostConnection>;
  /** The date the user registered or was created. The field follows a full ISO8601 date string format. */
  registeredDate: Maybe<Scalars['String']['output']>;
  /** Connection between the User and Revisions authored by the user */
  revisions: Maybe<UserToRevisionsConnection>;
  /** Connection between the User type and the UserRole type */
  roles: Maybe<UserToUserRoleConnection>;
  /** Whether the Toolbar should be displayed when the user is viewing the site. */
  shouldShowAdminToolbar: Maybe<Scalars['Boolean']['output']>;
  /** The slug for the user. This field is equivalent to WP_User-&gt;user_nicename */
  slug: Maybe<Scalars['String']['output']>;
  /** Connection between the User type and the TeamVote type */
  teamVotes: Maybe<UserToTeamVoteConnection>;
  /** The unique resource identifier path */
  uri: Maybe<Scalars['String']['output']>;
  /** A website url that is associated with the user. */
  url: Maybe<Scalars['String']['output']>;
  /**
   * The Id of the user. Equivalent to WP_User-&gt;ID
   * @deprecated Deprecated in favor of the databaseId field
   */
  userId: Maybe<Scalars['Int']['output']>;
  /** Username for the user. This field is equivalent to WP_User-&gt;user_login. */
  username: Maybe<Scalars['String']['output']>;
};


/** A User object */
export type UserAvatarArgs = {
  forceDefault: InputMaybe<Scalars['Boolean']['input']>;
  rating: InputMaybe<AvatarRatingEnum>;
  size?: InputMaybe<Scalars['Int']['input']>;
};


/** A User object */
export type UserCommentsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<UserToCommentConnectionWhereArgs>;
};


/** A User object */
export type UserEnqueuedScriptsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** A User object */
export type UserEnqueuedStylesheetsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** A User object */
export type UserMediaItemsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<UserToMediaItemConnectionWhereArgs>;
};


/** A User object */
export type UserPagesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<UserToPageConnectionWhereArgs>;
};


/** A User object */
export type UserPostsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<UserToPostConnectionWhereArgs>;
};


/** A User object */
export type UserRevisionsArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  where: InputMaybe<UserToRevisionsConnectionWhereArgs>;
};


/** A User object */
export type UserRolesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};


/** A User object */
export type UserTeamVotesArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** Connection to User Nodes */
export type UserConnection = {
  /** A list of edges (relational context) between RootQuery and connected User Nodes */
  edges: Array<UserConnectionEdge>;
  /** A list of connected User Nodes */
  nodes: Array<User>;
  /** Information about pagination in a connection. */
  pageInfo: UserConnectionPageInfo;
};

/** Edge between a Node and a connected User */
export type UserConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected User Node */
  node: User;
};

/** Page Info on the connected UserConnectionEdge */
export type UserConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** The Type of Identifier used to fetch a single User node. To be used along with the "id" field. Default is "ID". */
export enum UserNodeIdTypeEnum {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The Email of the User */
  Email = 'EMAIL',
  /** The hashed Global ID */
  Id = 'ID',
  /** The slug of the User */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
  /** The username the User uses to login with */
  Username = 'USERNAME'
}

/** A user role object */
export type UserRole = Node & {
  __typename?: 'UserRole';
  /** The capabilities that belong to this role */
  capabilities: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The display name of the role */
  displayName: Maybe<Scalars['String']['output']>;
  /** The globally unique identifier for the user role object. */
  id: Scalars['ID']['output'];
  /** Whether the object is restricted from the current viewer */
  isRestricted: Maybe<Scalars['Boolean']['output']>;
  /** The registered name of the role */
  name: Maybe<Scalars['String']['output']>;
};

/** Connection to UserRole Nodes */
export type UserRoleConnection = {
  /** A list of edges (relational context) between RootQuery and connected UserRole Nodes */
  edges: Array<UserRoleConnectionEdge>;
  /** A list of connected UserRole Nodes */
  nodes: Array<UserRole>;
  /** Information about pagination in a connection. */
  pageInfo: UserRoleConnectionPageInfo;
};

/** Edge between a Node and a connected UserRole */
export type UserRoleConnectionEdge = {
  /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
  cursor: Maybe<Scalars['String']['output']>;
  /** The connected UserRole Node */
  node: UserRole;
};

/** Page Info on the connected UserRoleConnectionEdge */
export type UserRoleConnectionPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Names of available user roles */
export enum UserRoleEnum {
  /** User role with specific capabilities */
  Administrator = 'ADMINISTRATOR',
  /** User role with specific capabilities */
  Blocked = 'BLOCKED',
  /** User role with specific capabilities */
  Contributor = 'CONTRIBUTOR',
  /** User role with specific capabilities */
  Curator = 'CURATOR',
  /** User role with specific capabilities */
  Keymaster = 'KEYMASTER',
  /** User role with specific capabilities */
  Participant = 'PARTICIPANT',
  /** User role with specific capabilities */
  Revisor = 'REVISOR',
  /** User role with specific capabilities */
  Spectator = 'SPECTATOR',
  /** User role with specific capabilities */
  Subscriber = 'SUBSCRIBER',
  /** User role with specific capabilities */
  Transcriber = 'TRANSCRIBER'
}

/** Connection between the User type and the Comment type */
export type UserToCommentConnection = CommentConnection & Connection & {
  __typename?: 'UserToCommentConnection';
  /** Edges for the UserToCommentConnection connection */
  edges: Array<UserToCommentConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Comment>;
  /** Information about pagination in a connection. */
  pageInfo: UserToCommentConnectionPageInfo;
};

/** An edge in a connection */
export type UserToCommentConnectionEdge = CommentConnectionEdge & Edge & {
  __typename?: 'UserToCommentConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Comment;
};

/** Page Info on the &quot;UserToCommentConnection&quot; */
export type UserToCommentConnectionPageInfo = CommentConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'UserToCommentConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the UserToCommentConnection connection */
export type UserToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail: InputMaybe<Scalars['String']['input']>;
  /** Array of author IDs to include comments for. */
  authorIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to exclude comments for. */
  authorNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Comment author URL. */
  authorUrl: InputMaybe<Scalars['String']['input']>;
  /** Array of comment IDs to include. */
  commentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
  commentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Include comments of a given type. */
  commentType: InputMaybe<Scalars['String']['input']>;
  /** Include comments from a given array of comment types. */
  commentTypeIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn: InputMaybe<Scalars['String']['input']>;
  /** Content object author ID to limit results by. */
  contentAuthor: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Limit results to those affiliated with a given content object ID. */
  contentId: InputMaybe<Scalars['ID']['input']>;
  /** Array of content object IDs to include affiliated comments for. */
  contentIdIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of content object IDs to exclude affiliated comments for. */
  contentIdNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Content object name (i.e. slug ) to retrieve affiliated comments for. */
  contentName: InputMaybe<Scalars['String']['input']>;
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent: InputMaybe<Scalars['Int']['input']>;
  /** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentStatus: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Karma score to retrieve matching comments for. */
  karma: InputMaybe<Scalars['Int']['input']>;
  /** The cardinality of the order of the connection */
  order: InputMaybe<OrderEnum>;
  /** Field to order the comments by. */
  orderby: InputMaybe<CommentsConnectionOrderbyEnum>;
  /** Parent ID of comment to retrieve children of. */
  parent: InputMaybe<Scalars['Int']['input']>;
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of parent IDs of comments *not* to retrieve children for. */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Search term(s) to retrieve matching comments for. */
  search: InputMaybe<Scalars['String']['input']>;
  /** Comment status to limit results by. */
  status: InputMaybe<Scalars['String']['input']>;
  /** Include comments for a specific user ID. */
  userId: InputMaybe<Scalars['ID']['input']>;
};

/** Connection between the User type and the EnqueuedScript type */
export type UserToEnqueuedScriptConnection = Connection & EnqueuedScriptConnection & {
  __typename?: 'UserToEnqueuedScriptConnection';
  /** Edges for the UserToEnqueuedScriptConnection connection */
  edges: Array<UserToEnqueuedScriptConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedScript>;
  /** Information about pagination in a connection. */
  pageInfo: UserToEnqueuedScriptConnectionPageInfo;
};

/** An edge in a connection */
export type UserToEnqueuedScriptConnectionEdge = Edge & EnqueuedScriptConnectionEdge & {
  __typename?: 'UserToEnqueuedScriptConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: EnqueuedScript;
};

/** Page Info on the &quot;UserToEnqueuedScriptConnection&quot; */
export type UserToEnqueuedScriptConnectionPageInfo = EnqueuedScriptConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'UserToEnqueuedScriptConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Connection between the User type and the EnqueuedStylesheet type */
export type UserToEnqueuedStylesheetConnection = Connection & EnqueuedStylesheetConnection & {
  __typename?: 'UserToEnqueuedStylesheetConnection';
  /** Edges for the UserToEnqueuedStylesheetConnection connection */
  edges: Array<UserToEnqueuedStylesheetConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<EnqueuedStylesheet>;
  /** Information about pagination in a connection. */
  pageInfo: UserToEnqueuedStylesheetConnectionPageInfo;
};

/** An edge in a connection */
export type UserToEnqueuedStylesheetConnectionEdge = Edge & EnqueuedStylesheetConnectionEdge & {
  __typename?: 'UserToEnqueuedStylesheetConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: EnqueuedStylesheet;
};

/** Page Info on the &quot;UserToEnqueuedStylesheetConnection&quot; */
export type UserToEnqueuedStylesheetConnectionPageInfo = EnqueuedStylesheetConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'UserToEnqueuedStylesheetConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Connection between the User type and the mediaItem type */
export type UserToMediaItemConnection = Connection & MediaItemConnection & {
  __typename?: 'UserToMediaItemConnection';
  /** Edges for the UserToMediaItemConnection connection */
  edges: Array<UserToMediaItemConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<MediaItem>;
  /** Information about pagination in a connection. */
  pageInfo: UserToMediaItemConnectionPageInfo;
};

/** An edge in a connection */
export type UserToMediaItemConnectionEdge = Edge & MediaItemConnectionEdge & {
  __typename?: 'UserToMediaItemConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: MediaItem;
};

/** Page Info on the &quot;UserToMediaItemConnection&quot; */
export type UserToMediaItemConnectionPageInfo = MediaItemConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'UserToMediaItemConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the UserToMediaItemConnection connection */
export type UserToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the User type and the page type */
export type UserToPageConnection = Connection & PageConnection & {
  __typename?: 'UserToPageConnection';
  /** Edges for the UserToPageConnection connection */
  edges: Array<UserToPageConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Page>;
  /** Information about pagination in a connection. */
  pageInfo: UserToPageConnectionPageInfo;
};

/** An edge in a connection */
export type UserToPageConnectionEdge = Edge & PageConnectionEdge & {
  __typename?: 'UserToPageConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Page;
};

/** Page Info on the &quot;UserToPageConnection&quot; */
export type UserToPageConnectionPageInfo = PageConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'UserToPageConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the UserToPageConnection connection */
export type UserToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the User type and the post type */
export type UserToPostConnection = Connection & PostConnection & {
  __typename?: 'UserToPostConnection';
  /** Edges for the UserToPostConnection connection */
  edges: Array<UserToPostConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<Post>;
  /** Information about pagination in a connection. */
  pageInfo: UserToPostConnectionPageInfo;
};

/** An edge in a connection */
export type UserToPostConnectionEdge = Edge & PostConnectionEdge & {
  __typename?: 'UserToPostConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: Post;
};

/** Page Info on the &quot;UserToPostConnection&quot; */
export type UserToPostConnectionPageInfo = PageInfo & PostConnectionPageInfo & WpPageInfo & {
  __typename?: 'UserToPostConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the UserToPostConnection connection */
export type UserToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author: InputMaybe<Scalars['Int']['input']>;
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Find objects connected to the author by the author's nicename */
  authorName: InputMaybe<Scalars['String']['input']>;
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Category ID */
  categoryId: InputMaybe<Scalars['Int']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Use Category Slug */
  categoryName: InputMaybe<Scalars['String']['input']>;
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Tag Slug */
  tag: InputMaybe<Scalars['String']['input']>;
  /** Use Tag ID */
  tagId: InputMaybe<Scalars['String']['input']>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Array of tag slugs, used to display objects from one tag AND another */
  tagSlugAnd: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Array of tag slugs, used to include objects in ANY specified tags */
  tagSlugIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the User type and the ContentNode type */
export type UserToRevisionsConnection = Connection & ContentNodeConnection & {
  __typename?: 'UserToRevisionsConnection';
  /** Edges for the UserToRevisionsConnection connection */
  edges: Array<UserToRevisionsConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<ContentNode>;
  /** Information about pagination in a connection. */
  pageInfo: UserToRevisionsConnectionPageInfo;
};

/** An edge in a connection */
export type UserToRevisionsConnectionEdge = ContentNodeConnectionEdge & Edge & {
  __typename?: 'UserToRevisionsConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: ContentNode;
};

/** Page Info on the &quot;UserToRevisionsConnection&quot; */
export type UserToRevisionsConnectionPageInfo = ContentNodeConnectionPageInfo & PageInfo & WpPageInfo & {
  __typename?: 'UserToRevisionsConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Arguments for filtering the UserToRevisionsConnection connection */
export type UserToRevisionsConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes: InputMaybe<Array<InputMaybe<ContentTypeEnum>>>;
  /** Filter the connection based on dates */
  dateQuery: InputMaybe<DateQueryInput>;
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword: InputMaybe<Scalars['Boolean']['input']>;
  /** Specific database ID of the object */
  id: InputMaybe<Scalars['Int']['input']>;
  /** Array of IDs for the objects to retrieve */
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Get objects with a specific mimeType property */
  mimeType: InputMaybe<MimeTypeEnum>;
  /** Slug / post_name of the object */
  name: InputMaybe<Scalars['String']['input']>;
  /** Specify objects to retrieve. Use slugs */
  nameIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** What parameter to use to order the objects by. */
  orderby: InputMaybe<Array<InputMaybe<PostObjectsConnectionOrderbyInput>>>;
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent: InputMaybe<Scalars['ID']['input']>;
  /** Specify objects whose parent is in an array */
  parentIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Specify posts whose parent is not in an array */
  parentNotIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Show posts with a specific password. */
  password: InputMaybe<Scalars['String']['input']>;
  /** Show Posts based on a keyword search */
  search: InputMaybe<Scalars['String']['input']>;
  /** Retrieve posts where post status is in an array. */
  stati: InputMaybe<Array<InputMaybe<PostStatusEnum>>>;
  /** Show posts with a specific status. */
  status: InputMaybe<PostStatusEnum>;
  /** Title of the object */
  title: InputMaybe<Scalars['String']['input']>;
};

/** Connection between the User type and the TeamVote type */
export type UserToTeamVoteConnection = Connection & TeamVoteConnection & {
  __typename?: 'UserToTeamVoteConnection';
  /** Edges for the UserToTeamVoteConnection connection */
  edges: Array<UserToTeamVoteConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<TeamVote>;
  /** Information about pagination in a connection. */
  pageInfo: UserToTeamVoteConnectionPageInfo;
};

/** An edge in a connection */
export type UserToTeamVoteConnectionEdge = Edge & TeamVoteConnectionEdge & {
  __typename?: 'UserToTeamVoteConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: TeamVote;
};

/** Page Info on the &quot;UserToTeamVoteConnection&quot; */
export type UserToTeamVoteConnectionPageInfo = PageInfo & TeamVoteConnectionPageInfo & WpPageInfo & {
  __typename?: 'UserToTeamVoteConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Connection between the User type and the UserRole type */
export type UserToUserRoleConnection = Connection & UserRoleConnection & {
  __typename?: 'UserToUserRoleConnection';
  /** Edges for the UserToUserRoleConnection connection */
  edges: Array<UserToUserRoleConnectionEdge>;
  /** The nodes of the connection, without the edges */
  nodes: Array<UserRole>;
  /** Information about pagination in a connection. */
  pageInfo: UserToUserRoleConnectionPageInfo;
};

/** An edge in a connection */
export type UserToUserRoleConnectionEdge = Edge & UserRoleConnectionEdge & {
  __typename?: 'UserToUserRoleConnectionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge */
  node: UserRole;
};

/** Page Info on the &quot;UserToUserRoleConnection&quot; */
export type UserToUserRoleConnectionPageInfo = PageInfo & UserRoleConnectionPageInfo & WpPageInfo & {
  __typename?: 'UserToUserRoleConnectionPageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** Field to order the connection by */
export enum UsersConnectionOrderbyEnum {
  /** Order by display name */
  DisplayName = 'DISPLAY_NAME',
  /** Order by email address */
  Email = 'EMAIL',
  /** Order by login */
  Login = 'LOGIN',
  /** Preserve the login order given in the LOGIN_IN array */
  LoginIn = 'LOGIN_IN',
  /** Order by nice name */
  NiceName = 'NICE_NAME',
  /** Preserve the nice name order given in the NICE_NAME_IN array */
  NiceNameIn = 'NICE_NAME_IN',
  /** Order by registration date */
  Registered = 'REGISTERED',
  /** Order by URL */
  Url = 'URL'
}

/** Options for ordering the connection */
export type UsersConnectionOrderbyInput = {
  /** The field name used to sort the results. */
  field: UsersConnectionOrderbyEnum;
  /** The cardinality of the order of the connection */
  order: InputMaybe<OrderEnum>;
};

/** Column used for searching for users. */
export enum UsersConnectionSearchColumnEnum {
  /** The user's email address. */
  Email = 'EMAIL',
  /** The globally unique ID. */
  Id = 'ID',
  /** The username the User uses to login with. */
  Login = 'LOGIN',
  /** A URL-friendly name for the user. The default is the user's username. */
  Nicename = 'NICENAME',
  /** The URL of the user's website. */
  Url = 'URL'
}

/** Information about pagination in a connection. */
export type WpPageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
};

/** The &quot;Weapons&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type Weapons = AcfFieldGroup & AcfFieldGroupFields & Weapons_Fields & {
  __typename?: 'Weapons';
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  engraving: Maybe<Array<Maybe<WeaponsEngraving>>>;
  /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  exclusive: Maybe<Scalars['Boolean']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  exclusiveEffects: Maybe<Scalars['String']['output']>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  hero: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  isFirstEx: Maybe<Scalars['Boolean']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  magazine: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  maxDps: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  minDps: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  weaponSkill: Maybe<Scalars['Boolean']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  weaponSkillAtk: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  weaponSkillChain: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  weaponSkillDescription: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  weaponSkillName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  weaponSkillRegenTime: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;file&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  weaponSkillVideo: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;radio&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  weaponType: Maybe<Scalars['String']['output']>;
};


/** The &quot;Weapons&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type WeaponsHeroArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** The &quot;WeaponsEngraving&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export type WeaponsEngraving = AcfFieldGroup & AcfFieldGroupFields & WeaponsEngraving_Fields & {
  __typename?: 'WeaponsEngraving';
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;WeaponsEngraving&quot; Field Group */
  stat: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;WeaponsEngraving&quot; Field Group */
  value: Maybe<Scalars['Float']['output']>;
};

/** Interface representing fields of the ACF &quot;WeaponsEngraving&quot; Field Group */
export type WeaponsEngraving_Fields = {
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;WeaponsEngraving&quot; Field Group */
  stat: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;WeaponsEngraving&quot; Field Group */
  value: Maybe<Scalars['Float']['output']>;
};

/** Interface representing fields of the ACF &quot;Weapons&quot; Field Group */
export type Weapons_Fields = {
  /** Field of the &quot;repeater&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  engraving: Maybe<Array<Maybe<WeaponsEngraving>>>;
  /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  exclusive: Maybe<Scalars['Boolean']['output']>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  exclusiveEffects: Maybe<Scalars['String']['output']>;
  /**
   * The name of the field group
   * @deprecated Use __typename instead
   */
  fieldGroupName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;relationship&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  hero: Maybe<AcfContentNodeConnection>;
  /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  isFirstEx: Maybe<Scalars['Boolean']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  magazine: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  maxDps: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  minDps: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;true_false&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  weaponSkill: Maybe<Scalars['Boolean']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  weaponSkillAtk: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  weaponSkillChain: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Field of the &quot;textarea&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  weaponSkillDescription: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  weaponSkillName: Maybe<Scalars['String']['output']>;
  /** Field of the &quot;number&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  weaponSkillRegenTime: Maybe<Scalars['Float']['output']>;
  /** Field of the &quot;file&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  weaponSkillVideo: Maybe<AcfMediaItemConnectionEdge>;
  /** Field of the &quot;radio&quot; Field Type added to the schema as part of the &quot;Weapons&quot; Field Group */
  weaponType: Maybe<Scalars['String']['output']>;
};


/** Interface representing fields of the ACF &quot;Weapons&quot; Field Group */
export type Weapons_FieldsHeroArgs = {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
};

/** Provides access to fields of the &quot;Collections&quot; ACF Field Group via the &quot;collections&quot; field */
export type WithAcfCollections = {
  /** Fields of the Collections ACF Field Group */
  collections: Maybe<Collections>;
};

/** Provides access to fields of the &quot;Costume&quot; ACF Field Group via the &quot;costume&quot; field */
export type WithAcfCostume = {
  /** Fields of the Costume ACF Field Group */
  costume: Maybe<Costume>;
};

/** Provides access to fields of the &quot;EquipmentOptions&quot; ACF Field Group via the &quot;equipmentOptions&quot; field */
export type WithAcfEquipmentOptions = {
  /** Fields of the EquipmentOptions ACF Field Group */
  equipmentOptions: Maybe<EquipmentOptions>;
};

/** Provides access to fields of the &quot;GuideFields&quot; ACF Field Group via the &quot;guideFields&quot; field */
export type WithAcfGuideFields = {
  /** Fields of the GuideFields ACF Field Group */
  guideFields: Maybe<GuideFields>;
};

/** Provides access to fields of the &quot;HeroInformation&quot; ACF Field Group via the &quot;heroInformation&quot; field */
export type WithAcfHeroInformation = {
  /** Fields of the HeroInformation ACF Field Group */
  heroInformation: Maybe<HeroInformation>;
};

/** Provides access to fields of the &quot;ItemInformation&quot; ACF Field Group via the &quot;itemInformation&quot; field */
export type WithAcfItemInformation = {
  /** Fields of the ItemInformation ACF Field Group */
  itemInformation: Maybe<ItemInformation>;
};

/** Provides access to fields of the &quot;TeamFields&quot; ACF Field Group via the &quot;teamFields&quot; field */
export type WithAcfTeamFields = {
  /** Fields of the TeamFields ACF Field Group */
  teamFields: Maybe<TeamFields>;
};

/** Provides access to fields of the &quot;Weapons&quot; ACF Field Group via the &quot;weapons&quot; field */
export type WithAcfWeapons = {
  /** Fields of the Weapons ACF Field Group */
  weapons: Maybe<Weapons>;
};

/** The writing setting type */
export type WritingSettings = {
  __typename?: 'WritingSettings';
  /** Default post category. */
  defaultCategory: Maybe<Scalars['Int']['output']>;
  /** Default post format. */
  defaultPostFormat: Maybe<Scalars['String']['output']>;
  /** Convert emoticons like :-) and :-P to graphics on display. */
  useSmilies: Maybe<Scalars['Boolean']['output']>;
};

export type DownvoteTeamMutationVariables = Exact<{
  heroId: Scalars['Int']['input'];
  teamId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
  ipAddress: Scalars['String']['input'];
}>;


export type DownvoteTeamMutation = { __typename?: 'RootMutation', downvoteTeam: { __typename?: 'DownvoteTeamPayload', teamId: number | null, success: boolean | null, currentVote: string | null } | null };

export type UpvoteTeamMutationVariables = Exact<{
  heroId: Scalars['Int']['input'];
  teamId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
  ipAddress: Scalars['String']['input'];
}>;


export type UpvoteTeamMutation = { __typename?: 'RootMutation', upvoteTeam: { __typename?: 'UpvoteTeamPayload', teamId: number | null, success: boolean | null, currentVote: string | null } | null };

export type GetAllHeroesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllHeroesQuery = { __typename?: 'RootQuery', heroes: { __typename?: 'RootQueryToHeroConnection', nodes: Array<{ __typename?: 'Hero', id: string, databaseId: number, uri: string | null, slug: string | null, heroId: number, title: string | null, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', mediaDetails: { __typename?: 'MediaDetails', sizes: Array<{ __typename?: 'MediaSize', sourceUrl: string | null, name: string | null } | null> | null } | null } } | null, heroInformation: { __typename?: 'HeroInformation', variations: Array<string | null> | null, portrait: Array<{ __typename?: 'HeroInformationPortrait', title: string | null, art: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string | null } } | null } | null> | null, bioFields: { __typename?: 'HeroInformationBioFields', rarity: Array<string | null> | null, element: string | null, role: string | null, name: string | null, age: string | null, compatibleEquipment: Array<string | null> | null, weight: string | null, story: string | null, species: string | null, naReleaseDate: string | null, krReleaseDate: string | null, jpReleaseDate: string | null, height: string | null, exclusiveWeapon: { __typename?: 'AcfContentNodeConnection', nodes: Array<{ __typename?: 'Collection' } | { __typename?: 'GraphqlDocument' } | { __typename?: 'Hero' } | { __typename?: 'Item', id: string, title: string | null, equipmentOptions: { __typename?: 'EquipmentOptions', lb5Option: Array<string | null> | null, lb5Value: number | null, maxSubOptionLines: number | null, mainStats: Array<{ __typename?: 'EquipmentOptionsMainStats', stat: Array<string | null> | null, isRange: boolean | null, value: number | null, minValue: number | null, maxValue: number | null } | null> | null, subStats: Array<{ __typename?: 'EquipmentOptionsSubStats', stat: Array<string | null> | null, isRange: boolean | null, value: number | null, minValue: number | null, maxValue: number | null } | null> | null } | null } | { __typename?: 'MediaItem' } | { __typename?: 'Page' } | { __typename?: 'Post' } | { __typename?: 'Team' }> } | null } | null, abilityFields: { __typename?: 'HeroInformationAbilityFields', chainStateTrigger: Array<string | null> | null, chainStateResult: Array<string | null> | null, chainSkillDescription: string | null, chainSkillName: string | null, normalAtkDescription: string | null, normalAtkName: string | null, specialAbilityName: string | null, specialAbilityDescription: string | null, partyBuff: Array<{ __typename?: 'HeroInformationAbilityFieldsPartyBuff', affectsParty: boolean | null, value: number | null, stat: Array<string | null> | null } | null> | null } | null, thumbnail: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string | null } } | null, background: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string | null } } | null, mlbAwakeningFields: { __typename?: 'HeroInformationMlbAwakeningFields', midGradeHpMlb: number | null, midGradeDreamMlb: number | null, midGradeDefMlb: number | null, midGradeAtkMlb: number | null, lowGradeHpMlb: number | null, lowGradeDreamMlb: number | null, lowGradeDefMlb: number | null, lowGradeAtkMlb: number | null, legendaryAwakeningMlb: number | null, highGradeHpMlb: number | null, highGradeDreamMlb: number | null, highGradeDefMlb: number | null, highGradeAtkMlb: number | null, gold: number | null } | null, statFields: { __typename?: 'HeroInformationStatFields', atk: number | null, basicResistance: number | null, cardSlot: number | null, crit: number | null, damageReduction: number | null, darkResistance: number | null, def: number | null, earthResistance: number | null, fieldGroupName: string | null, heal: number | null, hp: number | null, lightResistance: number | null, waterResistance: number | null, fireResistance: number | null, atkRank: number | null, defRank: number | null, hpRank: number | null, critRank: number | null, healRank: number | null, drRank: number | null, heroCount: number | null } | null, statPriorities: Array<{ __typename?: 'HeroInformationStatPriorities', buildName: string | null, explanation: string | null, statPriority: { __typename?: 'AcfContentNodeConnection', edges: Array<{ __typename?: 'AcfContentNodeConnectionEdge', node: { __typename?: 'Collection' } | { __typename?: 'GraphqlDocument' } | { __typename?: 'Hero' } | { __typename?: 'Item' } | { __typename?: 'MediaItem' } | { __typename?: 'Page' } | { __typename?: 'Post', id: string, title: string | null } | { __typename?: 'Team' } }> } | null } | null> | null, portrait2: Array<{ __typename?: 'HeroInformationPortrait2', art: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string | null, title: string | null } } | null } | null> | null, costumes: { __typename?: 'AcfContentNodeConnection', edges: Array<{ __typename?: 'AcfContentNodeConnectionEdge', node: { __typename?: 'Collection' } | { __typename?: 'GraphqlDocument' } | { __typename?: 'Hero' } | { __typename?: 'Item', id: string, uri: string | null, title: string | null, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string | null } } | null } | { __typename?: 'MediaItem' } | { __typename?: 'Page' } | { __typename?: 'Post' } | { __typename?: 'Team' } }> } | null, evolutionFields2: { __typename?: 'HeroInformationEvolutionFields2', evolution1: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string | null } } | null, evolution2: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string | null } } | null, evolution3: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string | null } } | null, evolution4: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string | null } } | null, evolution5: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string | null } } | null } | null, evolutionFields: { __typename?: 'HeroInformationEvolutionFields', evolution1: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string | null } } | null, evolution2: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string | null } } | null, evolution3: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string | null } } | null, evolution5: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string | null } } | null, evolution4: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string | null } } | null } | null, evaluationFields: { __typename?: 'HeroInformationEvaluationFields', pros: string | null, cons: string | null, tags: Array<string | null> | null } | null, buildGuideFields: { __typename?: 'HeroInformationBuildGuideFields', suggestedWeapons: Array<{ __typename?: 'HeroInformationBuildGuideFieldsSuggestedWeapons', weaponExplanation: string | null, suggestedWeapon: { __typename?: 'AcfContentNodeConnection', edges: Array<{ __typename?: 'AcfContentNodeConnectionEdge', node: { __typename?: 'Collection' } | { __typename?: 'GraphqlDocument' } | { __typename?: 'Hero' } | { __typename?: 'Item', id: string, uri: string | null, title: string | null, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string | null } } | null } | { __typename?: 'MediaItem' } | { __typename?: 'Page' } | { __typename?: 'Post' } | { __typename?: 'Team' } }> } | null } | null> | null, suggestedShield: Array<{ __typename?: 'HeroInformationBuildGuideFieldsSuggestedShield', shieldExplanation: string | null, suggestedShield: { __typename?: 'AcfContentNodeConnection', edges: Array<{ __typename?: 'AcfContentNodeConnectionEdge', node: { __typename?: 'Collection' } | { __typename?: 'GraphqlDocument' } | { __typename?: 'Hero' } | { __typename?: 'Item', id: string, uri: string | null, title: string | null, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string | null } } | null } | { __typename?: 'MediaItem' } | { __typename?: 'Page' } | { __typename?: 'Post' } | { __typename?: 'Team' } }> } | null } | null> | null, suggestedMerch: Array<{ __typename?: 'HeroInformationBuildGuideFieldsSuggestedMerch', merchExplanation: string | null, suggestedMerch: { __typename?: 'AcfContentNodeConnection', edges: Array<{ __typename?: 'AcfContentNodeConnectionEdge', node: { __typename?: 'Collection' } | { __typename?: 'GraphqlDocument' } | { __typename?: 'Hero' } | { __typename?: 'Item', id: string, uri: string | null, title: string | null, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string | null } } | null } | { __typename?: 'MediaItem' } | { __typename?: 'Page' } | { __typename?: 'Post' } | { __typename?: 'Team' } }> } | null } | null> | null, suggestedCards: Array<{ __typename?: 'HeroInformationBuildGuideFieldsSuggestedCards', cardExplanation: string | null, suggestedCard: string | null } | null> | null, suggestedAccessories: Array<{ __typename?: 'HeroInformationBuildGuideFieldsSuggestedAccessories', accessoryExplanation: string | null, suggestedAccessory: { __typename?: 'AcfContentNodeConnection', edges: Array<{ __typename?: 'AcfContentNodeConnectionEdge', node: { __typename?: 'Collection' } | { __typename?: 'GraphqlDocument' } | { __typename?: 'Hero' } | { __typename?: 'Item', id: string, uri: string | null, title: string | null, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string | null } } | null } | { __typename?: 'MediaItem' } | { __typename?: 'Page' } | { __typename?: 'Post' } | { __typename?: 'Team' } }> } | null } | null> | null } | null, bioFields2: { __typename?: 'HeroInformationBioFields2', weight: string | null, story: string | null, name: string | null, height: string | null, age: string | null } | null, analysisFields: { __typename?: 'HeroInformationAnalysisFields', detailedReview: string | null } | null, ascentAbilities: { __typename?: 'HeroInformationAscentAbilities', chainSkillDescription: string | null, chainSkillName: string | null, chainStateResult: Array<string | null> | null, chainStateTrigger: Array<string | null> | null, normalAtkDescription: string | null, normalAtkName: string | null, specialAbilityDescription: string | null, specialAbilityName: string | null, partyBuff: Array<{ __typename?: 'HeroInformationAscentAbilitiesPartyBuff', affectsParty: boolean | null, stat: Array<string | null> | null, value: number | null } | null> | null } | null, ascentExAbilities: { __typename?: 'HeroInformationAscentExAbilities', chainSkillDescription: string | null, chainSkillName: string | null, chainStateResult: Array<string | null> | null, chainStateTrigger: Array<string | null> | null, normalAtkDescription: string | null, normalAtkName: string | null, specialAbilityDescription: string | null, specialAbilityName: string | null, partyBuff: Array<{ __typename?: 'HeroInformationAscentExAbilitiesPartyBuff', affectsParty: boolean | null, stat: Array<string | null> | null, value: number | null } | null> | null } | null, exAbilities: { __typename?: 'HeroInformationExAbilities', chainSkillDescription: string | null, chainSkillName: string | null, chainStateResult: Array<string | null> | null, chainStateTrigger: Array<string | null> | null, normalAtkDescription: string | null, normalAtkName: string | null, specialAbilityDescription: string | null, specialAbilityName: string | null, partyBuff: Array<{ __typename?: 'HeroInformationExAbilitiesPartyBuff', affectsParty: boolean | null, stat: Array<string | null> | null, value: number | null } | null> | null } | null, illustrations: Array<{ __typename?: 'HeroInformationIllustrations', name: string | null, image: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', title: string | null, sourceUrl: string | null } } | null } | null> | null } | null }> } | null };

export type GetAllItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllItemsQuery = { __typename?: 'RootQuery', items: { __typename?: 'RootQueryToItemConnection', nodes: Array<{ __typename?: 'Item', id: string, databaseId: number, uri: string | null, title: string | null, slug: string | null, featuredImage: { __typename?: 'NodeWithFeaturedImageToMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string | null } } | null, weapons: { __typename?: 'Weapons', exclusive: boolean | null, exclusiveEffects: string | null, isFirstEx: boolean | null, magazine: number | null, maxDps: number | null, minDps: number | null, weaponSkill: boolean | null, weaponSkillAtk: number | null, weaponSkillChain: Array<string | null> | null, weaponSkillDescription: string | null, weaponSkillName: string | null, weaponSkillRegenTime: number | null, weaponType: string | null, engraving: Array<{ __typename?: 'WeaponsEngraving', stat: Array<string | null> | null, value: number | null } | null> | null, hero: { __typename?: 'AcfContentNodeConnection', nodes: Array<{ __typename?: 'Collection', id: string } | { __typename?: 'GraphqlDocument', id: string } | { __typename?: 'Hero', id: string } | { __typename?: 'Item', id: string } | { __typename?: 'MediaItem', id: string } | { __typename?: 'Page', id: string } | { __typename?: 'Post', id: string } | { __typename?: 'Team', id: string }> } | null, weaponSkillVideo: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string | null } } | null } | null, equipmentOptions: { __typename?: 'EquipmentOptions', lb5Option: Array<string | null> | null, lb5Value: number | null, maxSubOptionLines: number | null, mainStats: Array<{ __typename?: 'EquipmentOptionsMainStats', stat: Array<string | null> | null, isRange: boolean | null, value: number | null, minValue: number | null, maxValue: number | null } | null> | null, subStats: Array<{ __typename?: 'EquipmentOptionsSubStats', stat: Array<string | null> | null, isRange: boolean | null, value: number | null, minValue: number | null, maxValue: number | null } | null> | null } | null, costume: { __typename?: 'Costume', illustration: { __typename?: 'AcfMediaItemConnectionEdge', node: { __typename?: 'MediaItem', sourceUrl: string | null } } | null, hero: { __typename?: 'AcfContentNodeConnection', nodes: Array<{ __typename?: 'Collection', id: string } | { __typename?: 'GraphqlDocument', id: string } | { __typename?: 'Hero', id: string } | { __typename?: 'Item', id: string } | { __typename?: 'MediaItem', id: string } | { __typename?: 'Page', id: string } | { __typename?: 'Post', id: string } | { __typename?: 'Team', id: string }> } | null } | null, itemInformation: { __typename?: 'ItemInformation', achievement: string | null, artifactDescription: string | null, artifactPassives: string | null, artifactRarity: string | null, battleMedalShopCost: number | null, bottleCapCost: number | null, cost: number | null, costumeWeaponType: string | null, equipmentShopCost: number | null, howToObtain: Array<string | null> | null, maxLevel: number | null, mileageShopCost: number | null, mirrorShardCost: number | null, mysticThreadCost: number | null, rarity: Array<string | null> | null, unreleased: boolean | null, collections: { __typename?: 'AcfContentNodeConnection', nodes: Array<{ __typename?: 'Collection', id: string } | { __typename?: 'GraphqlDocument', id: string } | { __typename?: 'Hero', id: string } | { __typename?: 'Item', id: string } | { __typename?: 'MediaItem', id: string } | { __typename?: 'Page', id: string } | { __typename?: 'Post', id: string } | { __typename?: 'Team', id: string }> } | null, itemType: { __typename?: 'AcfTermNodeConnection', nodes: Array<{ __typename?: 'Category', name: string | null } | { __typename?: 'GraphqlDocumentGroup', name: string | null } | { __typename?: 'ItemType', name: string | null } | { __typename?: 'PostFormat', name: string | null } | { __typename?: 'Tag', name: string | null }> } | null } | null }> } | null };

export type GetAllTeamsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTeamsQuery = { __typename?: 'RootQuery', teams: { __typename?: 'RootQueryToTeamConnection', nodes: Array<{ __typename?: 'Team', id: string, databaseId: number, title: string | null, teamFields: { __typename?: 'TeamFields', teamType: string | null, notes: string | null, teamDamage: number | null, composition: Array<{ __typename?: 'TeamFieldsComposition', hero: { __typename?: 'AcfContentNodeConnection', nodes: Array<{ __typename?: 'Collection', id: string } | { __typename?: 'GraphqlDocument', id: string } | { __typename?: 'Hero', id: string } | { __typename?: 'Item', id: string } | { __typename?: 'MediaItem', id: string } | { __typename?: 'Page', id: string } | { __typename?: 'Post', id: string } | { __typename?: 'Team', id: string }> } | null, weapon: { __typename?: 'AcfContentNodeConnection', nodes: Array<{ __typename?: 'Collection', id: string } | { __typename?: 'GraphqlDocument', id: string } | { __typename?: 'Hero', id: string } | { __typename?: 'Item', id: string } | { __typename?: 'MediaItem', id: string } | { __typename?: 'Page', id: string } | { __typename?: 'Post', id: string } | { __typename?: 'Team', id: string }> } | null, shield: { __typename?: 'AcfContentNodeConnection', nodes: Array<{ __typename?: 'Collection', id: string } | { __typename?: 'GraphqlDocument', id: string } | { __typename?: 'Hero', id: string } | { __typename?: 'Item', id: string } | { __typename?: 'MediaItem', id: string } | { __typename?: 'Page', id: string } | { __typename?: 'Post', id: string } | { __typename?: 'Team', id: string }> } | null, accessory: { __typename?: 'AcfContentNodeConnection', nodes: Array<{ __typename?: 'Collection', id: string } | { __typename?: 'GraphqlDocument', id: string } | { __typename?: 'Hero', id: string } | { __typename?: 'Item', id: string } | { __typename?: 'MediaItem', id: string } | { __typename?: 'Page', id: string } | { __typename?: 'Post', id: string } | { __typename?: 'Team', id: string }> } | null, cards: { __typename?: 'AcfContentNodeConnection', nodes: Array<{ __typename?: 'Collection', id: string } | { __typename?: 'GraphqlDocument', id: string } | { __typename?: 'Hero', id: string } | { __typename?: 'Item', id: string } | { __typename?: 'MediaItem', id: string } | { __typename?: 'Page', id: string } | { __typename?: 'Post', id: string } | { __typename?: 'Team', id: string }> } | null, merch: { __typename?: 'AcfContentNodeConnection', nodes: Array<{ __typename?: 'Collection', id: string } | { __typename?: 'GraphqlDocument', id: string } | { __typename?: 'Hero', id: string } | { __typename?: 'Item', id: string } | { __typename?: 'MediaItem', id: string } | { __typename?: 'Page', id: string } | { __typename?: 'Post', id: string } | { __typename?: 'Team', id: string }> } | null, relic: { __typename?: 'AcfContentNodeConnection', nodes: Array<{ __typename?: 'Collection', id: string } | { __typename?: 'GraphqlDocument', id: string } | { __typename?: 'Hero', id: string } | { __typename?: 'Item', id: string } | { __typename?: 'MediaItem', id: string } | { __typename?: 'Page', id: string } | { __typename?: 'Post', id: string } | { __typename?: 'Team', id: string }> } | null, heroSubstitutions: { __typename?: 'AcfContentNodeConnection', nodes: Array<{ __typename?: 'Collection', id: string } | { __typename?: 'GraphqlDocument', id: string } | { __typename?: 'Hero', id: string } | { __typename?: 'Item', id: string } | { __typename?: 'MediaItem', id: string } | { __typename?: 'Page', id: string } | { __typename?: 'Post', id: string } | { __typename?: 'Team', id: string }> } | null, weaponSubstitutions: { __typename?: 'AcfContentNodeConnection', nodes: Array<{ __typename?: 'Collection', id: string } | { __typename?: 'GraphqlDocument', id: string } | { __typename?: 'Hero', id: string } | { __typename?: 'Item', id: string } | { __typename?: 'MediaItem', id: string } | { __typename?: 'Page', id: string } | { __typename?: 'Post', id: string } | { __typename?: 'Team', id: string }> } | null, shieldSubstitutions: { __typename?: 'AcfContentNodeConnection', nodes: Array<{ __typename?: 'Collection', id: string } | { __typename?: 'GraphqlDocument', id: string } | { __typename?: 'Hero', id: string } | { __typename?: 'Item', id: string } | { __typename?: 'MediaItem', id: string } | { __typename?: 'Page', id: string } | { __typename?: 'Post', id: string } | { __typename?: 'Team', id: string }> } | null, accessorySubstitutions: { __typename?: 'AcfContentNodeConnection', nodes: Array<{ __typename?: 'Collection', id: string } | { __typename?: 'GraphqlDocument', id: string } | { __typename?: 'Hero', id: string } | { __typename?: 'Item', id: string } | { __typename?: 'MediaItem', id: string } | { __typename?: 'Page', id: string } | { __typename?: 'Post', id: string } | { __typename?: 'Team', id: string }> } | null, merchSubstitutions: { __typename?: 'AcfContentNodeConnection', nodes: Array<{ __typename?: 'Collection', id: string } | { __typename?: 'GraphqlDocument', id: string } | { __typename?: 'Hero', id: string } | { __typename?: 'Item', id: string } | { __typename?: 'MediaItem', id: string } | { __typename?: 'Page', id: string } | { __typename?: 'Post', id: string } | { __typename?: 'Team', id: string }> } | null, cardsSubstitutions: { __typename?: 'AcfContentNodeConnection', nodes: Array<{ __typename?: 'Collection', id: string } | { __typename?: 'GraphqlDocument', id: string } | { __typename?: 'Hero', id: string } | { __typename?: 'Item', id: string } | { __typename?: 'MediaItem', id: string } | { __typename?: 'Page', id: string } | { __typename?: 'Post', id: string } | { __typename?: 'Team', id: string }> } | null, relicSubstitutions: { __typename?: 'AcfContentNodeConnection', nodes: Array<{ __typename?: 'Collection', id: string } | { __typename?: 'GraphqlDocument', id: string } | { __typename?: 'Hero', id: string } | { __typename?: 'Item', id: string } | { __typename?: 'MediaItem', id: string } | { __typename?: 'Page', id: string } | { __typename?: 'Post', id: string } | { __typename?: 'Team', id: string }> } | null } | null> | null } | null }> } | null };

export type GetTeamVotesWithUserVoteQueryVariables = Exact<{
  heroId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
}>;


export type GetTeamVotesWithUserVoteQuery = { __typename?: 'RootQuery', teamsVotesByHero: Array<{ __typename?: 'TeamVoteCount', downvoteCount: number | null, teamId: number | null, userId: number | null, userVote: string | null, upvoteCount: number | null, team: { __typename?: 'Team', id: string } | null } | null> | null };


export const DownvoteTeamDocument = gql`
    mutation DownvoteTeam($heroId: Int!, $teamId: Int!, $userId: Int!, $ipAddress: String!) {
  downvoteTeam(
    input: {heroId: $heroId, teamId: $teamId, userId: $userId, ipAddress: $ipAddress}
  ) {
    teamId
    success
    currentVote
  }
}
    `;
export type DownvoteTeamMutationFn = Apollo.MutationFunction<DownvoteTeamMutation, DownvoteTeamMutationVariables>;

/**
 * __useDownvoteTeamMutation__
 *
 * To run a mutation, you first call `useDownvoteTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDownvoteTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [downvoteTeamMutation, { data, loading, error }] = useDownvoteTeamMutation({
 *   variables: {
 *      heroId: // value for 'heroId'
 *      teamId: // value for 'teamId'
 *      userId: // value for 'userId'
 *      ipAddress: // value for 'ipAddress'
 *   },
 * });
 */
export function useDownvoteTeamMutation(baseOptions?: Apollo.MutationHookOptions<DownvoteTeamMutation, DownvoteTeamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DownvoteTeamMutation, DownvoteTeamMutationVariables>(DownvoteTeamDocument, options);
      }
export type DownvoteTeamMutationHookResult = ReturnType<typeof useDownvoteTeamMutation>;
export type DownvoteTeamMutationResult = Apollo.MutationResult<DownvoteTeamMutation>;
export type DownvoteTeamMutationOptions = Apollo.BaseMutationOptions<DownvoteTeamMutation, DownvoteTeamMutationVariables>;
export const UpvoteTeamDocument = gql`
    mutation UpvoteTeam($heroId: Int!, $teamId: Int!, $userId: Int!, $ipAddress: String!) {
  upvoteTeam(
    input: {heroId: $heroId, teamId: $teamId, userId: $userId, ipAddress: $ipAddress}
  ) {
    teamId
    success
    currentVote
  }
}
    `;
export type UpvoteTeamMutationFn = Apollo.MutationFunction<UpvoteTeamMutation, UpvoteTeamMutationVariables>;

/**
 * __useUpvoteTeamMutation__
 *
 * To run a mutation, you first call `useUpvoteTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpvoteTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upvoteTeamMutation, { data, loading, error }] = useUpvoteTeamMutation({
 *   variables: {
 *      heroId: // value for 'heroId'
 *      teamId: // value for 'teamId'
 *      userId: // value for 'userId'
 *      ipAddress: // value for 'ipAddress'
 *   },
 * });
 */
export function useUpvoteTeamMutation(baseOptions?: Apollo.MutationHookOptions<UpvoteTeamMutation, UpvoteTeamMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpvoteTeamMutation, UpvoteTeamMutationVariables>(UpvoteTeamDocument, options);
      }
export type UpvoteTeamMutationHookResult = ReturnType<typeof useUpvoteTeamMutation>;
export type UpvoteTeamMutationResult = Apollo.MutationResult<UpvoteTeamMutation>;
export type UpvoteTeamMutationOptions = Apollo.BaseMutationOptions<UpvoteTeamMutation, UpvoteTeamMutationVariables>;
export const GetAllHeroesDocument = gql`
    query GetAllHeroes {
  heroes(first: 1000) {
    nodes {
      id
      databaseId
      uri
      slug
      featuredImage {
        node {
          mediaDetails {
            sizes(include: THUMBNAIL) {
              sourceUrl
              name
            }
          }
        }
      }
      heroId
      title
      heroInformation {
        portrait {
          art {
            node {
              sourceUrl
            }
          }
          title
        }
        bioFields {
          rarity
          element
          role
          name
          age
          compatibleEquipment
          exclusiveWeapon {
            nodes {
              ... on Item {
                id
                title
                equipmentOptions {
                  mainStats {
                    stat
                    isRange
                    value
                    minValue
                    maxValue
                  }
                  subStats {
                    stat
                    isRange
                    value
                    minValue
                    maxValue
                  }
                  lb5Option
                  lb5Value
                  maxSubOptionLines
                }
              }
            }
          }
          weight
          story
          species
          naReleaseDate
          krReleaseDate
          jpReleaseDate
          height
        }
        abilityFields {
          chainStateTrigger
          chainStateResult
          partyBuff {
            affectsParty
            value
            stat
          }
          chainSkillDescription
          chainSkillName
          normalAtkDescription
          normalAtkName
          specialAbilityName
          specialAbilityDescription
        }
        portrait {
          art {
            node {
              sourceUrl
            }
          }
          title
        }
        thumbnail {
          node {
            sourceUrl
          }
        }
        background {
          node {
            sourceUrl
          }
        }
        mlbAwakeningFields {
          midGradeHpMlb
          midGradeDreamMlb
          midGradeDefMlb
          midGradeAtkMlb
          lowGradeHpMlb
          lowGradeDreamMlb
          lowGradeDefMlb
          lowGradeAtkMlb
          legendaryAwakeningMlb
          highGradeHpMlb
          highGradeDreamMlb
          highGradeDefMlb
          highGradeAtkMlb
          gold
        }
        statFields {
          atk
          basicResistance
          cardSlot
          crit
          damageReduction
          darkResistance
          def
          earthResistance
          fieldGroupName
          heal
          hp
          lightResistance
          waterResistance
          fireResistance
          atkRank
          defRank
          hpRank
          critRank
          healRank
          drRank
          heroCount
        }
        statPriorities {
          statPriority {
            edges {
              node {
                ... on Post {
                  id
                  title
                }
              }
            }
          }
          buildName
          explanation
        }
        portrait2 {
          art {
            node {
              sourceUrl
              title
            }
          }
        }
        costumes {
          edges {
            node {
              ... on Item {
                id
                uri
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                title
              }
            }
          }
        }
        evolutionFields2 {
          evolution1 {
            node {
              sourceUrl
            }
          }
          evolution2 {
            node {
              sourceUrl
            }
          }
          evolution3 {
            node {
              sourceUrl
            }
          }
          evolution4 {
            node {
              sourceUrl
            }
          }
          evolution5 {
            node {
              sourceUrl
            }
          }
        }
        evolutionFields {
          evolution1 {
            node {
              sourceUrl
            }
          }
          evolution2 {
            node {
              sourceUrl
            }
          }
          evolution3 {
            node {
              sourceUrl
            }
          }
          evolution5 {
            node {
              sourceUrl
            }
          }
          evolution4 {
            node {
              sourceUrl
            }
          }
        }
        evaluationFields {
          pros
          cons
          tags
        }
        buildGuideFields {
          suggestedWeapons {
            suggestedWeapon {
              edges {
                node {
                  ... on Item {
                    id
                    uri
                    title
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                  }
                }
              }
            }
            weaponExplanation
          }
          suggestedShield {
            suggestedShield {
              edges {
                node {
                  ... on Item {
                    id
                    uri
                    title
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                  }
                }
              }
            }
            shieldExplanation
          }
          suggestedMerch {
            merchExplanation
            suggestedMerch {
              edges {
                node {
                  ... on Item {
                    id
                    uri
                    title
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                  }
                }
              }
            }
          }
          suggestedCards {
            cardExplanation
            suggestedCard
          }
          suggestedAccessories {
            accessoryExplanation
            suggestedAccessory {
              edges {
                node {
                  ... on Item {
                    id
                    uri
                    title
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                  }
                }
              }
            }
          }
        }
        bioFields2 {
          weight
          story
          name
          height
          age
        }
        analysisFields {
          detailedReview
        }
        ascentAbilities {
          chainSkillDescription
          chainSkillName
          chainStateResult
          chainStateTrigger
          normalAtkDescription
          normalAtkName
          partyBuff {
            affectsParty
            stat
            value
          }
          specialAbilityDescription
          specialAbilityName
        }
        ascentExAbilities {
          chainSkillDescription
          chainSkillName
          chainStateResult
          chainStateTrigger
          normalAtkDescription
          normalAtkName
          partyBuff {
            affectsParty
            stat
            value
          }
          specialAbilityDescription
          specialAbilityName
        }
        exAbilities {
          chainSkillDescription
          chainSkillName
          chainStateResult
          chainStateTrigger
          normalAtkDescription
          normalAtkName
          partyBuff {
            affectsParty
            stat
            value
          }
          specialAbilityDescription
          specialAbilityName
        }
        variations
        illustrations {
          name
          image {
            node {
              title
              sourceUrl
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetAllHeroesQuery__
 *
 * To run a query within a React component, call `useGetAllHeroesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllHeroesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllHeroesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllHeroesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllHeroesQuery, GetAllHeroesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllHeroesQuery, GetAllHeroesQueryVariables>(GetAllHeroesDocument, options);
      }
export function useGetAllHeroesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllHeroesQuery, GetAllHeroesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllHeroesQuery, GetAllHeroesQueryVariables>(GetAllHeroesDocument, options);
        }
export function useGetAllHeroesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllHeroesQuery, GetAllHeroesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllHeroesQuery, GetAllHeroesQueryVariables>(GetAllHeroesDocument, options);
        }
export type GetAllHeroesQueryHookResult = ReturnType<typeof useGetAllHeroesQuery>;
export type GetAllHeroesLazyQueryHookResult = ReturnType<typeof useGetAllHeroesLazyQuery>;
export type GetAllHeroesSuspenseQueryHookResult = ReturnType<typeof useGetAllHeroesSuspenseQuery>;
export type GetAllHeroesQueryResult = Apollo.QueryResult<GetAllHeroesQuery, GetAllHeroesQueryVariables>;
export const GetAllItemsDocument = gql`
    query GetAllItems {
  items(first: 2000) {
    nodes {
      id
      databaseId
      uri
      featuredImage {
        node {
          sourceUrl
        }
      }
      title
      slug
      weapons {
        engraving {
          stat
          value
        }
        exclusive
        exclusiveEffects
        hero {
          nodes {
            id
          }
        }
        isFirstEx
        magazine
        maxDps
        minDps
        weaponSkill
        weaponSkillAtk
        weaponSkillChain
        weaponSkillDescription
        weaponSkillName
        weaponSkillRegenTime
        weaponSkillVideo {
          node {
            sourceUrl
          }
        }
        weaponType
      }
      equipmentOptions {
        mainStats {
          stat
          isRange
          value
          minValue
          maxValue
        }
        subStats {
          stat
          isRange
          value
          minValue
          maxValue
        }
        lb5Option
        lb5Value
        maxSubOptionLines
      }
      costume {
        illustration {
          node {
            sourceUrl
          }
        }
        hero {
          nodes {
            id
          }
        }
      }
      itemInformation {
        achievement
        artifactDescription
        artifactPassives
        artifactRarity
        battleMedalShopCost
        bottleCapCost
        collections {
          nodes {
            id
          }
        }
        cost
        costumeWeaponType
        equipmentShopCost
        howToObtain
        itemType {
          nodes {
            name
          }
        }
        maxLevel
        mileageShopCost
        mirrorShardCost
        mysticThreadCost
        rarity
        unreleased
      }
    }
  }
}
    `;

/**
 * __useGetAllItemsQuery__
 *
 * To run a query within a React component, call `useGetAllItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllItemsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllItemsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllItemsQuery, GetAllItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllItemsQuery, GetAllItemsQueryVariables>(GetAllItemsDocument, options);
      }
export function useGetAllItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllItemsQuery, GetAllItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllItemsQuery, GetAllItemsQueryVariables>(GetAllItemsDocument, options);
        }
export function useGetAllItemsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllItemsQuery, GetAllItemsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllItemsQuery, GetAllItemsQueryVariables>(GetAllItemsDocument, options);
        }
export type GetAllItemsQueryHookResult = ReturnType<typeof useGetAllItemsQuery>;
export type GetAllItemsLazyQueryHookResult = ReturnType<typeof useGetAllItemsLazyQuery>;
export type GetAllItemsSuspenseQueryHookResult = ReturnType<typeof useGetAllItemsSuspenseQuery>;
export type GetAllItemsQueryResult = Apollo.QueryResult<GetAllItemsQuery, GetAllItemsQueryVariables>;
export const GetAllTeamsDocument = gql`
    query GetAllTeams {
  teams(first: 200) {
    nodes {
      id
      databaseId
      title
      teamFields {
        teamType
        notes
        teamDamage
        composition {
          hero {
            nodes {
              id
            }
          }
          weapon {
            nodes {
              id
            }
          }
          shield {
            nodes {
              id
            }
          }
          accessory {
            nodes {
              id
            }
          }
          cards {
            nodes {
              id
            }
          }
          merch {
            nodes {
              id
            }
          }
          relic {
            nodes {
              id
            }
          }
          heroSubstitutions {
            nodes {
              id
            }
          }
          weaponSubstitutions {
            nodes {
              id
            }
          }
          shieldSubstitutions {
            nodes {
              id
            }
          }
          accessorySubstitutions {
            nodes {
              id
            }
          }
          merchSubstitutions {
            nodes {
              id
            }
          }
          cardsSubstitutions {
            nodes {
              id
            }
          }
          relicSubstitutions {
            nodes {
              id
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetAllTeamsQuery__
 *
 * To run a query within a React component, call `useGetAllTeamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTeamsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTeamsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTeamsQuery, GetAllTeamsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTeamsQuery, GetAllTeamsQueryVariables>(GetAllTeamsDocument, options);
      }
export function useGetAllTeamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTeamsQuery, GetAllTeamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTeamsQuery, GetAllTeamsQueryVariables>(GetAllTeamsDocument, options);
        }
export function useGetAllTeamsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllTeamsQuery, GetAllTeamsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllTeamsQuery, GetAllTeamsQueryVariables>(GetAllTeamsDocument, options);
        }
export type GetAllTeamsQueryHookResult = ReturnType<typeof useGetAllTeamsQuery>;
export type GetAllTeamsLazyQueryHookResult = ReturnType<typeof useGetAllTeamsLazyQuery>;
export type GetAllTeamsSuspenseQueryHookResult = ReturnType<typeof useGetAllTeamsSuspenseQuery>;
export type GetAllTeamsQueryResult = Apollo.QueryResult<GetAllTeamsQuery, GetAllTeamsQueryVariables>;
export const GetTeamVotesWithUserVoteDocument = gql`
    query GetTeamVotesWithUserVote($heroId: Int!, $userId: Int!) {
  teamsVotesByHero(heroId: $heroId, userId: $userId) {
    downvoteCount
    teamId
    userId
    userVote
    team {
      id
    }
    upvoteCount
  }
}
    `;

/**
 * __useGetTeamVotesWithUserVoteQuery__
 *
 * To run a query within a React component, call `useGetTeamVotesWithUserVoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTeamVotesWithUserVoteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTeamVotesWithUserVoteQuery({
 *   variables: {
 *      heroId: // value for 'heroId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetTeamVotesWithUserVoteQuery(baseOptions: Apollo.QueryHookOptions<GetTeamVotesWithUserVoteQuery, GetTeamVotesWithUserVoteQueryVariables> & ({ variables: GetTeamVotesWithUserVoteQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTeamVotesWithUserVoteQuery, GetTeamVotesWithUserVoteQueryVariables>(GetTeamVotesWithUserVoteDocument, options);
      }
export function useGetTeamVotesWithUserVoteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTeamVotesWithUserVoteQuery, GetTeamVotesWithUserVoteQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTeamVotesWithUserVoteQuery, GetTeamVotesWithUserVoteQueryVariables>(GetTeamVotesWithUserVoteDocument, options);
        }
export function useGetTeamVotesWithUserVoteSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTeamVotesWithUserVoteQuery, GetTeamVotesWithUserVoteQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTeamVotesWithUserVoteQuery, GetTeamVotesWithUserVoteQueryVariables>(GetTeamVotesWithUserVoteDocument, options);
        }
export type GetTeamVotesWithUserVoteQueryHookResult = ReturnType<typeof useGetTeamVotesWithUserVoteQuery>;
export type GetTeamVotesWithUserVoteLazyQueryHookResult = ReturnType<typeof useGetTeamVotesWithUserVoteLazyQuery>;
export type GetTeamVotesWithUserVoteSuspenseQueryHookResult = ReturnType<typeof useGetTeamVotesWithUserVoteSuspenseQuery>;
export type GetTeamVotesWithUserVoteQueryResult = Apollo.QueryResult<GetTeamVotesWithUserVoteQuery, GetTeamVotesWithUserVoteQueryVariables>;
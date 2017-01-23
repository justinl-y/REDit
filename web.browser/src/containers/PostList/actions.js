// const postListPageInitialState = { postsPage: undefined };

import mockData from '../../mock-data'; // should be from store?

const postListPageInitialState = mockData.posts;

// action type
const VOTE_UP = 'VOTE_UP';
const VOTE_DOWN = 'VOTE_DOWN';
const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const UPDATE_POST = 'UPDATE_POST';
const POSTS_SORT_NEWEST = 'POSTS_SORT_NEWEST';
const POSTS_SORT_POPULAR = 'POSTS_SORT_POPULAR';

// action creator
export const voteUp = id => ({
  type: VOTE_UP,
  payload: { id },
});

export const voteDown = id => ({
  type: VOTE_DOWN,
  payload: { id },
});

export const addPost = ({
  type: ADD_POST,
  payload: { },
});

export const deletePost = id => ({
  type: DELETE_POST,
  payload: { id },
});

export const updatePost = id => ({
  type: UPDATE_POST,
  payload: { id },
});

export const postsSortNewest = () => ({
  type: POSTS_SORT_NEWEST,
});

export const postsSortPopular = () => ({
  type: POSTS_SORT_POPULAR,
});

// reducer
export default (state = postListPageInitialState, action) => {
  // console.log(state);
  switch (action.type) {
    case VOTE_UP:
      return state.map((post) => {
        if (Number(post.id) !== Number(action.payload.id)) return post;
        // console.log(post);
        return { ...post, votes: post.votes + 1 };
      });
    case VOTE_DOWN:
      return state.map((post) => {
        if (Number(post.id) !== action.payload.id) return post;

        return { ...post, votes: post.votes > 0 ? post.votes - 1 : post.votes };
      });
    case POSTS_SORT_POPULAR:
      return state.slice().sort((a, b) => (
          Number(b.votes) - Number(a.votes)
          ),
      );
    case POSTS_SORT_NEWEST:
      return state.slice().sort((a, b) => (
        Number(a.id) - Number(b.id)
        ),
      );
    default:
      return state;
  }
};


/* export const reducer = (posts = data.data.posts, action) => {
  switch (action.type) {
    case VOTE_UP:
      // console.log(posts);
      // console.log(action);
      // console.log(action.payload);

      return posts.map((post) => {
        if (Number(post.id) !== action.payload.id) return post;

        return { ...post, votes: post.votes + 1 };
      });
    case VOTE_DOWN:
      return posts.map((post) => {
        if (Number(post.id) !== action.payload.id) return post;

        return { ...post, votes: post.votes > 0 ? post.votes - 1 : post.votes };
      });
    case SORT_POPULAR:
      return posts.slice(0, posts.length).sort((a, b) => (
          Number(b.votes) - Number(a.votes)
          ),
      );
    case SORT_NEWEST:
      return posts.slice(0, posts.length).sort((a, b) => (
        Number(a.id) - Number(b.id)
        ),
      );
    default:
      return posts;
  }
};*/

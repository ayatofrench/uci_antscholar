// // @ts-check

// import { types, flow } from "mobx-state-tree";
// import { UserStore } from "./authStore";
// //import { UIStore } from "./uiStore";
// //import { PostsStore } from "./postsStore";
// //import { AuthorsStore } from "./authorsStore";
// //import { CategoriesStore } from "./categoriesStore";
// //import { firestore } from "./firebaseInit";
// //import Config from "../utils/config";

// export const UROPStore = types
//   .model("UROPStore", {
//     // ui: types.optional(UIStore, {
//     //   languages: Config.languages
//     // }),
//     user: types.optional(UserStore, {
//       user: null,
//       //isUserPending: true,
//       //isAuthor: false
//     }),
// //     posts: types.optional(PostsStore, {
// //       posts: {},
// //       arePostsLoaded: false,
// //       sortBy: "newest",
// //       status: "all",
// //       author: "all",
// //       language: "all",
// //       category: "all"
// //     }),
// //     authors: types.optional(AuthorsStore, {
// //       authors: Config.authors
// //     }),
// //     categories: types.optional(CategoriesStore, {
// //       categories: {},
// //       areCategoriesLoaded: false
// //     })
// //   })
// //   .actions(self => ({
// //     backup: flow(function* backup() {
// //       const collections = ["posts", "categories"];
// //       const result = {};

// //       for (let i = 0; i < collections.length; i++) {
// //         const collectionId = collections[i];
// //         const collectionSnapshot = yield firestore
// //           .collection(collectionId)
// //           .get();
// //         const collectionData = [];
// //         collectionSnapshot.forEach(doc => {
// //           collectionData.push(doc.data());
// //         });
// //         result[collectionId] = collectionData;
// //       }

// //       return result;
// //   })
//   });

import { isServer } from '../utils/isServer';
//import PostStore from './PostStore';
//import UIStore from './UIStore';

let clientSideStores;

export function getStores(initialData = { postStoreInitialData: {} }) {
  if (isServer) {
    return {
      //postStore: new PostStore(initialData.postStoreInitialData),
      //uiStore: new UIStore(),
    };
  }
  if (!clientSideStores) {
    clientSideStores = {
      //postStore: new PostStore(initialData.postStoreInitialData),
      //uiStore: new UIStore(),
    };
  }

  return clientSideStores;
}

const StoreContext = React.createContext();

export function StoreProvider(props) {
  return <StoreContext.Provider value={props.value}>{props.children}</StoreContext.Provider>;
}

export function useMobxStores() {
  return React.useContext(StoreContext);
}
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootReducer from "./rootReducer";


const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // Xem thêm tại mục "Quá trình merge".
   };
const pReducer = persistReducer(persistConfig, rootReducer);
 
const store = createStore(pReducer,composeWithDevTools());

export const persistor = persistStore(store);


export default store;

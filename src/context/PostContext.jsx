import { createContext, useContext, useState } from "react";

const PostContext = createContext(undefined);

export const PostProvider = ({children}) => {
    const [selectedPostId, setSelectedPostId] = useState(null);
    const [refreshPosts, setRefreshPosts] = useState(true);

    return (
      <PostContext.Provider
        value={{
          selectedPostId,
          setSelectedPostId,
          refreshPosts,
          setRefreshPosts,
        }}
      >
        {children}
      </PostContext.Provider>
    );
}

export const usePostContext = () => {
    const context = useContext(PostContext);
    if (!context) {
      throw new Error("usePostContext must be used within a PostProvider");
    }
    return context;
}
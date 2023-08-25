import PostCard from "./post-card";
import { type Database } from "../types/database";

type UserEntity = Database["public"]["Tables"]["users"]["Row"]
type PostsEntity = Database["public"]["Tables"]["posts"]["Row"]
type Post = PostsEntity & {
  user: UserEntity
}
export function PostList({ posts }: { posts: Post[] | null }) {
  return (
    <>
      {posts?.map((post) => {
        const { id, user, content } = post;
        const {
          user_name: userName,
          name: userFullName,
          avatar_url: avatarUrl,
        } = user;
        return (
          <PostCard
            key={id}
            avatarUrl={avatarUrl}
            content={content}
            userFullName={userFullName}
            userName={userName}
          />
        );
      })}
    </>
  );
}

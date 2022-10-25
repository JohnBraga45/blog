import { Link } from "react-router-dom";

import styles from "./Post.module.css";

const Post = ({ post }) => {
  return (
    <div  className={styles.post}>
     
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ler
      </Link>
    </div>
  );
};

export default Post;
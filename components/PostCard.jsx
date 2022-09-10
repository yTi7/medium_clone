import Image from "next/image";
import Logo from "../static/logo.png";
import { FiBookmark } from "react-icons/fi";

const styles = {
  authorContainer: `flex gap-[.4rem]`,
  authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
  authorImage: `object-cover `,
  authorName: `font-semibold`,
  title: `font-bold text-2xl`,
  briefing: `text-[#787878]`,
  detailsContainer: `flex items-center justify-between text-[#787878]`,
  articleDetails: `my-2 text-[.8rem]`,
  category: `bg-[#F2F3F2] p-1 rounded`,
  bookmarkContainer: `cursor-pointer`,
  postDetails: ``,
};

const PostCard = () => {
  return (
    <div className={styles.postDetails}>
      <div className={styles.authorContainer}>
        <div className={styles.authorImageContainer}>
          <Image
            className={styles.authorImage}
            src={Logo}
            width={40}
            height={40}
          />
        </div>
        <div className={styles.authorName}>Yash Ti</div>
      </div>
      <h1 className={styles.title}>
        7 free dev tools, that will make your life simple
      </h1>
      <div className={styles.briefing}>
        Productivity is a skill that can be learned.
      </div>
      <div className={styles.detailsContainer}>
        <span className={styles.articleDetails}>
          Apr 17 • 5 min read •
          <span className={styles.category}>productivity</span>
        </span>
        <span className={styles.bookmarkContainer}>
          <FiBookmark className="h-5 w-5" />
        </span>
      </div>
    </div>
  );
};

export default PostCard;

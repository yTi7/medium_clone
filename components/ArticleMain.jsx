import Image from "next/image";
import { AiFillPlayCircle } from "react-icons/ai";
import Qazi from "../static/qazi.jpg";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { HiOutlineLink } from "react-icons/hi";
import { BiBookmarks } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import Banner from "../static/banner.png";

const styles = {
  wrapper: "flex items-center justify-center flex-[3] border-l border-r",
  content: "h-screen w-full overflow-scroll p-[2rem]",
  postHeaderContainer:
    "flex justify-between items-center mt-[2.2rem] mb-[1.2rem]",
  authorContainer: "flex gap-[1rem]",
  authorProfileImageContainer:
    "h-[3rem] w-[3rem] grid center rounded-full overflow-hidden",
  image: "object-cover",
  column: "flex flex-1 flex-col justify-center",
  postDetails: "flex gap-[.2rem] text-[#787878]",
  listenButton: "flex items-center gap-[.2rem] text-[#1A8917]",
  socials: "flex gap-[1rem] text-[#787878] cursor-pointer",
  space: "w-[.5rem]",
  bannerContainer: "h-[18rem] w-full grid center overflow-hidden mb-[2rem]",
  articleMainContainer: "flex flex-col gap-[1rem]",
  title: "font-bold text-3xl",
  subtitle: "text-[1.4rem] text-[#292929]",
  articleText: "text-[1.5rem] text-[#292929]",
};

const ArticleMain = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.postHeaderContainer}>
          <div className={styles.authorContainer}>
            <div className={styles.authorProfileImageContainer}>
              <Image
                src={Qazi}
                className={styles.image}
                width={100}
                height={100}
              />
            </div>
            <div className={styles.column}>
              <div>Yash Ti</div>
              <div className={styles.postDetails}>
                <span>Apr 17 • 5 min read •</span>
                <span className={styles.listenButton}>
                  <AiFillPlayCircle /> Listen
                </span>
              </div>
            </div>
          </div>
          <div className={styles.socials}>
            <IoLogoTwitter />
            <FaFacebook />
            <GrLinkedin />
            <HiOutlineLink />
            <div className={styles.space} />
            <BiBookmarks />
            <FiMoreHorizontal />
          </div>
        </div>
        <div className={styles.articleMainContainer}>
          <div className={styles.bannerContainer}>
            <Image
              src={Banner}
              height={100}
              width={100}
              className={styles.image}
            />
          </div>
          <h1 className={styles.title}>
            7 free dev tools, that will make your life more Productive
          </h1>
          <h4 className={styles.subtitle}>
            <div>Brief: Productivity is a skill that can be learned.</div>
          </h4>
          <div className={styles.articleText}>
            I love being Productive every day as it helps me sort out all my
            priorities very quickly. Being Productive is a superpower we all
            must acquier early in our lives. So, for this same quest, I keep
            searching for some of the best Productive tools that will help me to
            stay productive all day long. So, here I have curated some of the
            best Productive tools that will also make you more productive so
            that you can achieve most of the day very easily. Let's get started.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleMain;

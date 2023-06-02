import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center md:px-32 py-5 px-5 bg-fuchsia-200">
      <div className="font-bold text-xl">Yeraldinne Sanabria</div>
      <div className="flex gap-5">
        <a
          target="_black"
          href="https://www.linkedin.com/in/yeraldinne-sanabria/"
          className="font-bold text-xl"
        >
          <RxLinkedinLogo />
        </a>
        <a
          className="font-bold text-xl"
          target="_black"
          href="https://github.com/Yeraldinnesan/node-react-AWS-challenge"
        >
          <RxGithubLogo />
        </a>
      </div>
    </div>
  );
};

export default TopBar;

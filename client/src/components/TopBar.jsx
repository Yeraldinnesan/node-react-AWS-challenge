import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center lg:py-5 py-5 lg:px-32 px-5 bg-zinc-700">
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

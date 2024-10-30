import LinkBlock from '../components/LinkBlock';

export default function Home() {
  return (
    <div>
      <LinkBlock
        title="FurAffinity"
        description="View my commissioned art!"
        url="https://www.furaffinity.net/user/sablewind"
      />
      <LinkBlock
        title="SmugMug"
        description="Check out my photography!"
        url="https://zenith.smugmug.com/"
      />
      <LinkBlock
        title="Telegram Stickers"
        description="Add my Telegram stickers!"
        url="https://t.me/addstickers/zenithfolf"
      />
    </div>
  );
}


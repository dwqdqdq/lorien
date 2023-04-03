import LinkBlock from '../components/LinkBlock';

export default function Home() {
  return (
    <div>
      <LinkBlock
        title="GitHub"
        description="Check out my GitHub profile!"
        url="https://github.com/myusername"
      />
      <LinkBlock
        title="LinkedIn"
        description="Connect with me on LinkedIn"
        url="https://linkedin.com/in/myusername"
      />
      <LinkBlock
        title="Twitter"
        description="Follow me on Twitter"
        url="https://twitter.com/myusername"
      />
    </div>
  );
}


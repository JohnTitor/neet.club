import Container from '@/components/Container';

export default function About() {
  return (
    <Container title="About Me – 2k36.org">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-2 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            I&apos;m a self-taught programmer with interests in FLOSS
            (Free/Libre and Open Source Software). I&apos;m mainly working on
            the Rust programming language as a contributor and a member of some
            teams/WGs.
          </p>
          <p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/JohnTitor"
            >
              My profile README on GitHub
            </a>{' '}
            has some explanation about my FLOSS work.
          </p>
        </div>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
            What&apos;s the &quot;2k36&quot;?
          </h2>
          <p>
            I&apos;m also known as &quot;John Titor&quot; because of my GitHub
            name. John Titor is a time traveler came from the year 2036.
          </p>
        </div>
      </div>
    </Container>
  );
}

import Image from 'next/image';
import Stack from 'components/atoms/Stack';
import GitHubIcon from 'components/molecules/GitHubIcon';
import TwitterIcon from 'components/molecules/TwitterIcon';
import InstagramIcon from 'components/molecules/InstagramIcon';
import FlickrIcon from 'components/molecules/FlickrIcon';

const AvatarWithName = () => {
  return (
    <div className="flex">
      <Image
        className="rounded-full"
        src="/static/images/avatar.jpeg"
        width={100}
        height={100}
        alt="avatar"
        layout="fixed"
      />

      <div className="flex flex-col ml-4 items-center">
        <div>
          <div className="flex flex-col items-start">
            <p className="text-2xl lg:text-3xl font-bold">Yuji Matsumoto</p>

            <p className="text-xl text-gray-500 ml-1">@queq1890</p>
          </div>

          <Stack direction="row" className="items-center mt-2" spacing={2}>
            <a
              href="https://github.com/queq1890"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://twitter.com/queq1890"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://instagram.com/queq1890"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.flickr.com/photos/191867744@N08"
              title="Flickr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <FlickrIcon />
            </a>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default AvatarWithName;

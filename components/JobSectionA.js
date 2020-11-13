import Link from 'next/link'
import Image from 'next/image'
import Title from './Text/Title'
const JobSectionA = () => {
  return (
    <div className="flex card bg-deep-black">
      <div className="flex flex-row w-5/12 h-auto overflow-visible bg-transparent image-section">
        {/* <Image width={} className="z-20 object-cover w-4/12 sliced-image" src="/images/kelly-sikkema-v9FQR4tbIq8-unsplash (1).webp" alt="" /> */}
        <img className="z-20 object-cover w-4/12 sliced-image" src="/images/kelly-sikkema-v9FQR4tbIq8-unsplash (1).webp" alt="" />
        <img className="z-10 object-cover w-5/12 sliced-image" src="/images/brad-neathery-mGH253KbfaY-unsplash (1).webp" alt="" />
        <img className="object-cover w-1/2 sliced-image" src="/images/mia-baker-klRB1BB9pV8-unsplash (2).webp" alt="" />
      </div>
      <div className="flex flex-col justify-center w-7/12 pl-8 space-y-2">
        <Title color="white">Product Designer</Title>
        <p className="text-lg text-gray-clay">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor vulputate vel et in morbi amet. Tincidunt
          condimentum nisi, quam eget posuere facilisi porta. Nisi, urna sit consequat id magna elementum leo. Feugiat
          eu mi in dignissim vestibulum. Lectus facilisis fermentum platea id aliquet tellus vulputate enim. Nunc
          adipiscing dolor dignissim ut. Ut aliquet sit aliquet egestas praesent elit non. Interdum eget eget ultrices
          pulvinar semper tincidunt. Sem fames ac nulla in egestas ut velit morbi dolor quam.
        </p>
        <Link href="/product-designer">
        <a className="link">Découvrir le métier de Product Designer →</a>
        </Link>
      </div>
    </div>
  );
};

export default JobSectionA;
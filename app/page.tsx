import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* Image 1 */}
      <div className="my-8">
        <Image
          src="/1.png"
          alt="Description of Image 1"
          width={500}
          height={500}
        />
      </div>

      {/* Image 2 */}
      <div className="my-8">
        <Image
          src="/2.png"
          alt="Description of Image 2"
          width={500}
          height={500}
        />
      </div>

      {/* Image 3 */}
      <div className="my-8">
        <Image
          src="/3.png"
          alt="Description of Image 3"
          width={500}
          height={500}
        />
      </div>
    </main>
  );
}

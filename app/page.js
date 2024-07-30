import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">The Brazilian Beat</h1>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-4">
        <div
          className="mx-auto bg-white shadow-md py-2 px-4 rounded flex justify-center space-x-4"
          style={{ maxWidth: "fit-content" }}
        >
          <Link
            href="/artists"
            className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
          >
            Artists
          </Link>
          <Link
            href="/instruments"
            className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
          >
            Instruments
          </Link>
          <Link
            href="/playlist"
            className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
          >
            Playlist
          </Link>
        </div>
        <section className="mt-16 mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="order-2 md:order-1 text-left">
            <h2 className="text-xl font-bold mb-4 bg-blue-800 text-white rounded px-2 py-1 inline-block">
              What is it? Where did it come from?
            </h2>
            <p className="text-base">
              Choro is a vibrant and energetic instrumental genre of Brazilian
              popular music. Despite its name translating to cry or lament,
              choro is characterized by a joyful and upbeat rhythm. It emerged
              in the late 19th century in Rio de Janeiro as a fusion of European
              musical influences, such as the waltz and polka, with
              African-Brazilian rhythms like lundu and batuque. This unique
              blend gave birth to a musical style that is both sophisticated and
              infectious, featuring intricate melodies, improvisation, and
              syncopated rhythms.
            </p>
          </div>
          <div className="order-1 md:order-1 flex justify-center">
            <figure>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIUQVioiqtPMSCaqXsiIa4ogHS3GAK8SloFQ&s"
                alt="Album cover"
                className="w-full w-64 h-64 rounded shadow-md"
              />
              <figcaption className="text-base text-center mt-4">
                Clube do Choro de Betim
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="order-1 md:order-1 flex justify-center">
            <figure>
              <img
                src="https://excavatedshellac.com/wp-content/uploads/2018/03/batutas.jpg"
                alt="Batutas"
                className="w-full max-w-md rounded shadow-md"
              />
              <figcaption className="text-base text-center mt-4">
                Os Oito Batutas
              </figcaption>
            </figure>
          </div>
          <div className="order-2 md:order-2 text-left">
            <h2 className="text-xl font-bold mb-4 bg-blue-800 text-white rounded px-2 py-1 inline-block">
              How did it evolve over time?
            </h2>
            <p className="text-base">
              Choro emerged in the late 19th century as a unique blend of
              European and African-Brazilian musical elements. Initially, it was
              simply a style of playing popular European dances like the waltz
              and polka with a distinctly Brazilian rhythm. The term choro
              itself is debated, possibly deriving from the emotional nature of
              the music or from an Afro-Brazilian dance. Regardless, the genre
              quickly developed its own identity with virtuoso musicians like
              Joaquim Callado Jr. forming ensembles dedicated to this new style.
              <br />
              Choro gained popularity throughout the early 20th century,
              becoming a symbol of Brazilian culture. Composers like Pixinguinha
              pushed the boundaries of the genre, incorporating new instruments
              and harmonies. However, the rise of samba in the 1930s
              overshadowed choro&apos;s popularity. Despite this, the genre
              experienced a revival in the 1940s thanks to musicians like Jacob
              do Bandolim, who reintroduced choro to a new generation. <br />
            </p>
          </div>
        </section>
        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="order-2 md:order-1 text-left">
            <h2 className="text-xl font-bold mb-4 bg-blue-800 text-white rounded px-2 py-1 inline-block">
              What makes Choro unique?
            </h2>
            <p className="text-base">
              Choro is characterized by its lively and energetic tempo,
              intricate melodies, and complex harmonies. A key feature is its
              improvisational nature, allowing musicians to showcase their
              virtuosity. The rhythmic foundation is a blend of African and
              European influences, creating a syncopated and driving pulse.
              Choro&apos;s instrumentation typically includes flute, clarinet,
              guitar, cavaquinho, and pandeiro, though other instruments can be
              incorporated. The genre&apos;s joyful and playful spirit sets it
              apart from other Brazilian musical styles.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <figure className="flex flex-col justify-center">
              <img
                src="https://s2-g1.glbimg.com/9VWvQ9VFBCG6Kv_yV6KGD3SN2Ko=/0x0:6000x4000/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/7/h/kapANeTliaxBTSm9bnBQ/ronaldo-do-bandolim-e-choro-na-ribeira-foto-rebeca-bravos-2-1-.jpg"
                alt="Choro na Ribeira"
                className="w-full max-w-sm rounded shadow-md"
              />
              <figcaption className="text-base text-center mt-2">
                Choro na Ribeira
              </figcaption>
            </figure>
          </div>
        </section>
      </main>
      <footer className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 text-base">
            CPRG306B | Web Dev 2 | Spring 2024 | Final Project | Rafael Santos
            Coelho
          </p>
        </div>
      </footer>
    </div>
  );
}

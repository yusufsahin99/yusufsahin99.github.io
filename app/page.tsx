const publications = [
  {
    title:
      'Attention-Discounted Adaptive Sampler for Masked Diffusion Language Models',
    authors: (
      <>
        <strong>Yusuf Sahin</strong>, Ahmed Rockey Saikia, Volkan Cevher, Paolo
        Favaro
      </>
    ),
    venue: 'arXiv, 2026',
    href: 'https://arxiv.org/abs/2606.10829',
    code: 'https://github.com/yusufsahin99/ADAS',
    image: '/adas.jpg',
    alt: 'First page of the ADAS paper',
    description:
      'A training-free sampler that uses attention-aware reranking to make parallel decoding in masked diffusion language models more reliable and efficient.',
  },
  {
    title: 'Communication-Inspired Tokenization for Structured Image Representations',
    authors: (
      <>
        Aram Davtyan, <strong>Yusuf Sahin</strong>, Yasaman Haghighi, Sebastian
        Stapf, Pablo Acuaviva, Alexandre Alahi, Paolo Favaro
      </>
    ),
    venue: 'arXiv, 2026',
    href: 'https://arxiv.org/abs/2602.20731',
    project: 'https://araachie.github.io/comit/',
    image: '/comit.jpg',
    alt: 'First page of the COMiT paper',
    description:
      'A communication-inspired image tokenizer that builds compact, structured visual representations by incrementally integrating information from localized crops.',
  },
];

export default function Home() {
  return (
    <main>
      <header className="intro" aria-labelledby="page-title">
        <div className="intro-copy">
          <h1 id="page-title">Yusuf Sahin</h1>

          <p>
            I am a first-year PhD student in the{' '}
            <a href="https://www.cvg.unibe.ch/">Computer Vision Group</a> at the
            University of Bern, advised by{' '}
            <a href="https://scholar.google.com/citations?user=w_XDRRsAAAAJ">
              Prof. Dr. Paolo Favaro
            </a>
            .
          </p>

          <p>
            My research focuses on structured and efficient representation
            learning for generative models across vision and language. I am
            particularly interested in designing architectural and
            inference-time mechanisms that exploit the underlying structure of
            data to obtain compact representations and reduce computation.
          </p>

          <nav className="profile-links" aria-label="Profile links">
            <a href="mailto:yusuf.sahin@unibe.ch">Email</a>
            <span aria-hidden="true">/</span>
            <a href="https://scholar.google.com/citations?user=BAOC1tsAAAAJ&hl=en">
              Scholar
            </a>
            <span aria-hidden="true">/</span>
            <a href="https://github.com/yusufsahin99">GitHub</a>
            <span aria-hidden="true">/</span>
            <a href="https://www.cvg.unibe.ch/people/sahin">CVG profile</a>
          </nav>
        </div>

        <figure className="portrait-wrap">
          <img
            className="portrait"
            src="/yusuf-sahin.jpeg"
            alt="Yusuf Sahin overlooking Lake Geneva and the Alps"
          />
        </figure>
      </header>

      <section className="publications" aria-labelledby="publications-heading">
        <div className="section-heading">
          <h2 id="publications-heading">Publications</h2>
          <a
            href="https://scholar.google.com/citations?user=BAOC1tsAAAAJ&hl=en"
            aria-label="View all publications on Google Scholar"
          >
            Google Scholar <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="publication-list">
          {publications.map((paper) => (
            <article className="publication" key={paper.href}>
              <a className="paper-image" href={paper.href} aria-label={paper.title}>
                <img src={paper.image} alt={paper.alt} />
              </a>

              <div className="paper-copy">
                <h3>
                  <a href={paper.href}>{paper.title}</a>
                </h3>
                <p className="authors">{paper.authors}</p>
                <p className="venue">{paper.venue}</p>
                <p className="paper-links">
                  {paper.code ? (
                    <>
                      <a href={paper.code}>code</a>
                      <span aria-hidden="true"> / </span>
                    </>
                  ) : null}
                  {paper.project ? (
                    <>
                      <a href={paper.project}>project page</a>
                      <span aria-hidden="true"> / </span>
                    </>
                  ) : null}
                  <a href={paper.href}>arXiv</a>
                </p>
                <p className="description">{paper.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <p>Yusuf Sahin · University of Bern</p>
        <a href="#page-title">Back to top ↑</a>
      </footer>
    </main>
  );
}

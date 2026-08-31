const publications = [
  {
    shortTitle: 'ADAS',
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
    shortTitle: 'COMiT',
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
            <a
              href="https://www.cvg.unibe.ch/"
              data-umami-event="profile-link-click"
              data-umami-event-destination="Computer Vision Group"
            >
              Computer Vision Group
            </a>{' '}
            at the
            University of Bern, advised by{' '}
            <a
              href="https://scholar.google.com/citations?user=w_XDRRsAAAAJ"
              data-umami-event="profile-link-click"
              data-umami-event-destination="Paolo Favaro Scholar"
            >
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
            <a
              href="mailto:yusuf.sahin@unibe.ch"
              data-umami-event="profile-link-click"
              data-umami-event-destination="Email"
            >
              Email
            </a>
            <span aria-hidden="true">/</span>
            <a
              href="https://scholar.google.com/citations?user=BAOC1tsAAAAJ&hl=en"
              data-umami-event="profile-link-click"
              data-umami-event-destination="Google Scholar"
            >
              Scholar
            </a>
            <span aria-hidden="true">/</span>
            <a
              href="https://github.com/yusufsahin99"
              data-umami-event="profile-link-click"
              data-umami-event-destination="GitHub"
            >
              GitHub
            </a>
            <span aria-hidden="true">/</span>
            <a
              href="https://www.cvg.unibe.ch/people/sahin"
              data-umami-event="profile-link-click"
              data-umami-event-destination="CVG profile"
            >
              CVG profile
            </a>
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
            data-umami-event="profile-link-click"
            data-umami-event-destination="Google Scholar publications"
          >
            Google Scholar <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="publication-list">
          {publications.map((paper) => (
            <article className="publication" key={paper.href}>
              <a
                className="paper-image"
                href={paper.href}
                aria-label={paper.title}
                data-umami-event="paper-open"
                data-umami-event-paper={paper.shortTitle}
                data-umami-event-surface="image"
              >
                <img src={paper.image} alt={paper.alt} />
              </a>

              <div className="paper-copy">
                <h3>
                  <a
                    href={paper.href}
                    data-umami-event="paper-open"
                    data-umami-event-paper={paper.shortTitle}
                    data-umami-event-surface="title"
                  >
                    {paper.title}
                  </a>
                </h3>
                <p className="authors">{paper.authors}</p>
                <p className="venue">{paper.venue}</p>
                <p className="paper-links">
                  {paper.code ? (
                    <>
                      <a
                        href={paper.code}
                        data-umami-event="paper-resource-click"
                        data-umami-event-paper={paper.shortTitle}
                        data-umami-event-resource="code"
                      >
                        code
                      </a>
                      <span aria-hidden="true"> / </span>
                    </>
                  ) : null}
                  {paper.project ? (
                    <>
                      <a
                        href={paper.project}
                        data-umami-event="paper-resource-click"
                        data-umami-event-paper={paper.shortTitle}
                        data-umami-event-resource="project page"
                      >
                        project page
                      </a>
                      <span aria-hidden="true"> / </span>
                    </>
                  ) : null}
                  <a
                    href={paper.href}
                    data-umami-event="paper-resource-click"
                    data-umami-event-paper={paper.shortTitle}
                    data-umami-event-resource="arXiv"
                  >
                    arXiv
                  </a>
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

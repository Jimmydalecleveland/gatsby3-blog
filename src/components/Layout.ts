import styled from "@emotion/styled";

const Layout = styled.main`
  display: grid;
  grid-template-columns: minmax(1.5rem, 1fr) minmax(auto, 60ch) minmax(
      1.5rem,
      1fr
    );
  justify-content: center;
  padding-bottom: ${({ theme }) => theme.space.$5};

  > * {
    grid-column: 2 / 3;
  }

  > main {
    grid-column: 1 / -1;
  }

  > .main-logo {
    grid-column: 2 / 3;
    margin: 0 auto;
    max-width: 300px;
  }

  > figure {
    margin: ${({ theme }) => theme.space.$5} 0;
    grid-column: 2 / 3;

    // Gatsby images wrap the image in a span
    > span {
      width: 100%;
      max-width: none !important;
    }

    // remove universal link underline
    a {
      box-shadow: none;
    }

    img {
      border-radius: 8px;
      // Gatsby image adds a white box-shadow for some reason
      box-shadow: none !important;
    }
  }

  .hero-image {
    position: relative;
    margin-bottom: 1.5rem;
    grid-column: 1 / -1;
    height: 40vw;

    .gatsby-image-wrapper {
      width: 100% !important;
      height: 100% !important;
    }

    a {
      box-shadow: none;
    }

    .main-logo {
      position: absolute;
      left: ${({ theme }) => theme.space.$2};
      top: ${({ theme }) => theme.space.$2};
      width: 120px;
      filter: drop-shadow(rgb(14, 25, 44) 5px 4px 4px);
    }

    .attribution {
      position: absolute;
      color: #94a5a5;
      right: ${({ theme }) => theme.space.$1};
      bottom: ${({ theme }) => theme.space.$1};
      text-shadow: 1px 1px #081a40;
    }
  }

  .gatsby-resp-iframe-wrapper {
    grid-column: 2 / 3;
    margin: ${({ theme }) => theme.space.$5} 0;
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
  }

  video {
    grid-column: 2 / 3;
    width: 100%;
  }

  .gatsby-highlight {
    margin: ${({ theme }) => theme.space.$5} 0;
    grid-column: 2 / 3;
    width: 100%;
  }

  @media (min-width: 640px) {
    grid-template-columns: minmax(1.5rem, 1fr) 8ch minmax(auto, 60ch) 8ch minmax(
        1.5rem,
        1fr
      );

    > * {
      grid-column: 3 / 4;
    }

    .hero-image {
      height: 20vw;

      .main-logo {
        left: ${({ theme }) => theme.space.$4};
        top: ${({ theme }) => theme.space.$4};
        width: 200px;
      }
    }

    > .main-logo {
      grid-column: 3 / 4;
      margin: 0 auto;
      max-width: 300px;
    }

    .full-width {
      margin: 0;
      grid-column: 1 / -1;

      img {
        width: 100%;
      }
    }

    > figure {
      grid-column: 2 / 5;
    }

    .gatsby-resp-iframe-wrapper {
      grid-column: 2 / 5;
    }

    video {
      grid-column: 2 / 5;
      width: 100%;
    }

    .gatsby-highlight {
      grid-column: 2 / 5;
    }
  }
`;

export default Layout;

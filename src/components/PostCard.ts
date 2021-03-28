import styled from "@emotion/styled";

const PostCard = styled.div`
  margin-bottom: 1.5rem;
  cursor: pointer;

  h4 {
    margin: 0 0 0.2em;
  }

  p {
    margin: 0 0 0.5em;
    font-size: 13px;
  }

  .text {
    min-width: 0;
    min-height: 0;
  }

  .image-wrapper {
    display: none;
  }

  @media (min-width: 640px) {
    display: grid;
    gap: ${({ theme }) => theme.space.$3};
    grid-template-columns: 2fr 1fr;
    height: 100px;
    overflow: hidden;

    p {
      font-size: ${({ theme }) => theme.fontSizes.$1};
    }

    .image-wrapper {
      display: block;
      border-radius: 10px;
      overflow: hidden;
    }
  }
`;

export default PostCard;

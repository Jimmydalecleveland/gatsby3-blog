import styled from "@emotion/styled";

const PostCard = styled.div`
  margin-bottom: ${({ theme }) => theme.space.$5};
  cursor: pointer;

  background-color: #16243e;
  padding: ${({ theme }) => theme.space.$4};
  border-radius: 10px;

  h3 {
    color: ${({ theme }) => theme.colors.$textSecondary};
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
    margin-left: auto;
  }

  .date {
    margin-bottom: ${({ theme }) => theme.space.$3};
    font-size: ${({ theme }) => theme.fontSizes.$1};

    display: inline-block;
    color: #96c2d0;
    background-color: #2d3d5a;
    border-radius: 4px;
    line-height: 1;
    padding: 4px 8px 2px; /* ocular adjustment */
  }

  @media (min-width: 640px) {
    display: grid;
    gap: ${({ theme }) => theme.space.$3};
    grid-template-columns: 2fr 1fr;
    /* height: 100px; */
    overflow: hidden;

    h3 {
      font-size: 22px;
    }

    p {
      font-size: ${({ theme }) => theme.fontSizes.$1};
    }

    .image-wrapper {
      display: block;
      overflow: hidden;

      img {
        border-radius: 10px;
      }
    }
  }
`;

export default PostCard;

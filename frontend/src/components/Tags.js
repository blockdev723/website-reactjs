import React from 'react';

const Tags = props => {
  const tags = props.tags;
  if (tags) {
    return (
      <div className="tag-list">
        {
          tags.map(tag => {
            const handleClick = ev => {
              ev.preventDefault();
              props.onClickTag(tag, page => null, null);
            };

            return (
              <a
                href=""
                className="idiom-tag-default idiom-tag-pill"
                key={tag}
                onClick={null}>
                  {/* handleClick */}
                {tag}
              </a>
            );
          })
        }
      </div>
    );
  } else {
    return (
      <div>Loading Tags...</div>
    );
  }
};

export default Tags;

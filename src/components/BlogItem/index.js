import React from "react";
import "./blog-item.scss";
import { RegisterBg } from "@assets";
import { Button, Gap } from "@components";
import { useHistory } from "react-router-dom";

const BlogItem = () => {
  const history = useHistory();

  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date Post</p>
        <p className="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          id commodo justo. In vehicula vulputate nibh, id vestibulum sem
          posuere sed. Nullam efficitur enim vitae tristique molestie. Nulla
          feugiat blandit elit quis dapibus. Nunc tincidunt libero tellus, sit
          amet malesuada magna dictum sit amet. Proin augue enim, laoreet a
          lobortis nec, viverra a tellus. Phasellus ut odio dictum, accumsan
          arcu in, convallis nulla. Morbi fringilla diam et mauris faucibus
          pellentesque semper et mauris. Vivamus ultrices quis lectus mollis
          dignissim. Donec dapibus metus eget dui auctor, et dignissim diam
          suscipit. Praesent consectetur vitae odio dignissim sagittis. Nullam
          eget rutrum quam. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Sed et mattis nibh.
          Vestibulum lacinia tincidunt finibus. In nec fringilla ante, at
          placerat turpis.
        </p>
        <Gap height={20} />
        <Button
          title="View Detail"
          onClick={() => history.push("/detail-blog")}
        />
      </div>
    </div>
  );
};

export default BlogItem;

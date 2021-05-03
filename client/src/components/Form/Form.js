import React, { useState } from "react";
import FileBase64 from "react-file-base64";

const Form = () => {
  // useSTate hook
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const handleSubmit = () => {
    // later
  };

  const clear = () => {
    // later
  };

  return (
    <section>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <h4>Creating a Story</h4>
        <input
          type="text"
          name="creator"
          placeholder="Creator"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <input
          type="text"
          name="message"
          placeholder="Message"
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <input
          type="text"
          name="tags"
          placeholder="Tags"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />

        {/* file input */}
        <div>
          <FileBase64
            type="file"
            multiple={false}
            onDone={(base64) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>

        {/* button */}
        <input type="submit" value="Submit" />
        <input type="button" value="Clear" onClick={clear} />
      </form>
    </section>
  );
};

export default Form;

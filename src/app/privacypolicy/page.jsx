import React from "react";


const Privacy = () => {
  return (
    
    <div className="w-full h-full flex flex-col items-center justify-evenly">
      <h1 className="text-4xl font-bold mt-4">Website privacy policy</h1>
      <h3 className="mt-2 text-2xl font-semibold">Who we are</h3>
      <p className="w-9/12 mt-5 text-base">
        Our website address is:
        <a
          className="text-red-600 font-semibold"
          href="https://loktantraudghosh.com/"
        >
          www.loktantraudghosh.com
        </a>
      </p>
      <p className="w-9/12 mt-3 text-base">
        What personal data we collect and why we collect it Comments
      </p>
      <p className="w-9/12 mt-3 text-base">
        When visitors leave comments on the site we collect the data shown in
        the comments form, and also the visitor’s IP address and browser user
        agent string to help spam detection.
      </p>
      <p className="w-9/12 mt-3 text-base">
        An anonymized string created from your email address (also called a
        hash) may be provided to the Gravatar service to see if you are using
        it. The Gravatar service privacy policy is available here{" "}
        <a
          className="text-blue-700 font-semibold"
          href="https://automattic.com/privacy/"
        >
          https://automattic.com/privacy/
        </a>{" "}
        After approval of your comment, your profile picture is visible to the
        public in the context of your comment.
      </p>
      <p className="w-9/12 mt-3 text-base font-semibold">Media</p>
      <p className="w-9/12 mt-3 text-base">
        If you upload images to the website, you should avoid uploading images
        with embedded location data (EXIF GPS) included. Visitors to the website
        can download and extract any location data from images on the website.
      </p>
      <p className="w-9/12 mt-3 text-base font-semibold ">Contact forms</p>
      <p className="w-9/12 mt-3 text-base font-semibold">Cookies</p>
      <p className="w-9/12 mt-3 text-base">
        If you leave a comment on our site you may opt-in to saving your name,
        email address and website in cookies. These are for your convenience so
        that you do not have to fill in your details again when you leave
        another comment. These cookies will last for one year.
      </p>
      <p className="w-9/12 mt-3 text-base">
        If you have an account and you log in to this site, we will set a
        temporary cookie to determine if your browser accepts cookies. This
        cookie contains no personal data and is discarded when you close your
        browser.
      </p>
      <p className="w-9/12 mt-3 text-base">
        When you log in, we will also set up several cookies to save your login
        information and your screen display choices. Login cookies last for two
        days, and screen options cookies last for a year. If you select
        &quot;Remember Me&quot;, your login will persist for two weeks. If you log out of
        your account, the login cookies will be removed.
      </p>
      <p className="w-9/12 mt-3 text-base">
        If you edit or publish an article, an additional cookie will be saved in
        your browser. This cookie includes no personal data and simply indicates
        the post ID of the article you just edited. It expires after 1 day.
      </p>
      <p className="w-9/12 mt-3 text-base">
        Embedded content from other websites
      </p>
      <p className="w-9/12 mt-3 text-base">
        Articles on this site may include embedded content (e.g. videos, images,
        articles, etc.). Embedded content from other websites behaves in the
        exact same way as if the visitor has visited the other website.
      </p>
      <p className="w-9/12 mt-3 text-base">
        These websites may collect data about you, use cookies, embed additional
        third-party tracking, and monitor your interaction with that embedded
        content, including tracking your interaction with the embedded content
        if you have an account and are logged in to that website.
      </p>
      <p className="w-9/12 mt-3 text-base font-semibold">Analytics</p>
      <p className="w-9/12 mt-3 text-base">Who we share your data with</p>
      <p className="w-9/12 mt-3 text-base">How long we retain your data</p>
      <p className="w-9/12 mt-3 text-base">
        If you leave a comment, the comment and its metadata are retained
        indefinitely. This is so we can recognize and approve any follow-up
        comments automatically instead of holding them in a moderation queue.
      </p>
      <p className="w-9/12 mt-3 text-base">
        For users that register on our website (if any), we also store the
        personal information they provide in their user profile. All users can
        see, edit, or delete their personal information at any time (except they
        cannot change their username). Website administrators can also see and
        edit that information.
      </p>
      <p className="w-9/12 mt-3 text-base">
        What rights you have over your data
      </p>
      <p className="w-9/12 mt-3 text-base">
        If you have an account on this site, or have left comments, you can
        request to receive an exported file of the personal data we hold about
        you, including any data you have provided to us. You can also request
        that we erase any personal data we hold about you. This does not include
        any data we are obliged to keep for administrative, legal, or security
        purposes.
      </p>
      <p className="w-9/12 mt-3 text-base">Where we send your data</p>
      <p className="w-9/12 mt-3 text-base">
        Visitor comments may be checked through an automated spam
        detection service.
      </p>
    </div>
  );
};

export default Privacy;

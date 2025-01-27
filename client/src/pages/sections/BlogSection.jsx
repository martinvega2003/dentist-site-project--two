import React from "react";
import mainArticleImg from "../../images/main-article-thumbnail.webp"
import articleImgOne from "../../images/article-thumbnail-1.jpg"
import articleImgTwo from "../../images/article-thumbnail-2.jpg"
import articleImgThree from "../../images/article-thumbnail-3.webp"

const BlogSection = () => {
  return (
    <section className="py-16 px-6 lg:px-20 bg-neutralLight text-gray-800">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Discover Our Latest Articles</h2>
        <p className="text-lg text-gray-600">
          Explore insightful tips and updates from our dental professionals to
          help you maintain a healthy and beautiful smile.
        </p>
      </div>

      {/* Blog Content */}
      <div className="flex flex-col justify-start items-center gap-10">
        {/* Main Article */}
        <div className="w-full">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src={mainArticleImg}
              alt="Main blog post"
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent">
              <h3 className="text-2xl font-bold text-white mb-2">
                Why Regular Checkups Are Essential
              </h3>
              <p className="text-gray-300">
                Discover the importance of scheduling your bi-annual visits for
                optimal dental health.
              </p>
            </div>
          </div>
        </div>

        {/* Other Articles */}
        <div className="w-full h-fit flex flex-col-reverse lg:flex-row justify-center items-center">
					<div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-4 p-6">
						<h2 className="text-4xl text-primary text-bold">
							Learn How You Can Take Care Of Your Teeth Daily
						</h2>
						<p className="text-md text-neutralDark">
							Read our articles and learn from Professional advice how to take regular care of your teeth and have the most beautiful smile
						</p>
						<button className="py-2 px-8 bg-primary border-primary rounded-md border-2 text-neutralLight hover:bg-neutralLight hover:text-primary transition duration-300">
							See Articles
						</button>
					</div>

					<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
						{/* Article Cards */}
						{[1, 2, 3].map((_, index) => (
							<div
								key={index}
								className="w-full sm:w-52 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300"
							>
								<img
									src={index === 0 ? articleImgOne : index === 1 ? articleImgTwo : articleImgThree}
									alt={`Blog article ${index + 1}`}
									className="w-full h-40 object-cover"
								/>
								<div className="p-4">
									<h4 className="font-bold text-lg mb-2">
										Blog Post Title {index + 1}
									</h4>
									<p className="text-sm text-gray-600">
										A short description of the article to engage readers and
										provide insight into the topic.
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
      </div>

      {/* Newsletter Subscription */}
      <div className="w-full bg-neutralDark rounded-md mt-12 text-center py-8 px-6 md:px-0">
        <h3 className="text-2xl font-bold mb-4 text-neutralLight">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-lg text-neutralLight mb-6">
          Sign up now and receive free teeth whitening consultations for a year!
        </p>
        <form className="flex flex-col items-center">
          <div className="flex flex-col sm:flex-row items-center w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent mb-4 sm:mb-0 sm:mr-4"
            />
            <button
              type="submit"
              className="bg-primary text-white py-3 px-6 rounded-md shadow-md hover:scale-110 transition duration-300"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BlogSection;

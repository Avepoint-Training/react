import React from "react";
import { AiOutlinePlayCircle } from "react-icons/ai";
import Image from "../Base/Image.jsx";
import CardNews from "../Components/CardNews/CardNews";
import Doc from "../Components/Doc/Doc.jsx";
import Event from "../Components/Event/Event";
import Faqs from "../Components/Faq/Faq";
import InputCustom from "../Components/InputCustom/InputCustom";
import Navigation from "../Components/Navigation/Navigation";
import "./layout.css";

const newsData = [
  {
    name: "New Learning System Is Live",
    img: "https://picsum.photos/200",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia cum beatae, optio voluptas corrupti rem sed aut culpa corporis perferendis autem cupiditate quas quod velit, esse magni saepe deserunt nemo.",
    date: "05/Jan/2021",
    user: "Humman Resource",
  },
  {
    name: "New Learning System Is Live",
    img: "https://picsum.photos/200",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia cum beatae, optio voluptas corrupti rem sed aut culpa corporis perferendis autem cupiditate quas quod velit, esse magni saepe deserunt nemo.",
    date: "05/Jan/2021",
    user: "Humman Resource",
  },
  {
    name: "New Learning System Is Live",
    img: "https://picsum.photos/200",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia cum beatae, optio voluptas corrupti rem sed aut culpa corporis perferendis autem cupiditate quas quod velit, esse magni saepe deserunt nemo.",
    date: "05/Jan/2021",
    user: "Humman Resource",
  },
  {
    name: "New Learning System Is Live",
    img: "https://picsum.photos/200",
    detail:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia cum beatae, optio voluptas corrupti rem sed aut culpa corporis perferendis autem cupiditate quas quod velit, esse magni saepe deserunt nemo.",
    date: "05/Jan/2021",
    user: "Humman Resource",
  },
];

const imgsGallery = [
  {
    link: Image.image_gallery,
  },
  {
    link: Image.image_gallery_1,
  },
  {
    link: Image.image_gallery_2,
  },
  {
    link: Image.image_gallery_3,
  },
];

const videosGallery = [
  {
    link: Image.video,
  },
  {
    link: Image.video_1,
  },
  {
    link: Image.video_2,
  },
  {
    link: Image.video_3,
  },
];

const qLinks = [
  {
    name: "Training",
    link: Image.icon,
  },
  {
    name: "Organization",
    link: Image.icon_1,
  },
  {
    name: "Task",
    link: Image.icon_2,
  },
  {
    name: "Global Sales",
    link: Image.icon_3,
  },
  {
    name: "Birthday",
    link: Image.icon_4,
  },
  {
    name: "Health",
    link: Image.icon_5,
  },
  {
    name: "Service Desk",
    link: Image.icon_6,
  },
  {
    name: "Truck",
    link: Image.icon_7,
  },
  {
    name: "Idea",
    link: Image.icon_8,
  },
];

const events = [
  {
    day: "1",
    name: "Register Portal",
    time: "09:00 AM - 09:30 AM",
  },
  {
    day: "2",
    name: "IT Maintenance",
    time: "09:00 AM - 09:30 AM",
  },
  {
    day: "3",
    name: "IT Maintenance",
    time: "09:00 AM - 09:30 AM",
  },
  {
    day: "4",
    name: "IT Maintenance",
    time: "09:00 AM - 09:30 AM",
  },
];

const faqs = [
  {
    title: "Mock your back-end API and start coding your UI today.",
    content:
      "It's hard to put together a meaningful UI prototype without making real requests to an API. By making real requests, you'll uncover problems with application flow, timing, and API design early, improving the quality of both the user experience and API. With Mockaroo, you can design your own mock APIs, You control the URLs, responses, and error conditions. Paralellize UI and API development and start delivering better applications faster today!",
  },

  {
    title: "Why is test data important?",
    content:
      "If you're developing an application, you'll want to make sure you're testing it under conditions that closely simulate a production environment. In production, you'll have an army of users banging away at your app and filling your database with data, which puts stress on your code. If you're hand-entering data into a test environment one record at a time using the UI, you're never going to build up the volume and variety of data that your app will accumulate in a few days in production. Worse, the data you enter will be biased towards your own usage patterns and won't match real-world usage, leaving important bugs undiscovered.",
  },

  {
    title: "Why is realistic data important?",
    content:
      "When your test database is filled with realistic looking data, you'll be more engaged as a tester. When you demonstrate new features to others, they'll understand them faster. Real data is varied and will contain characters that may not play nice with your code, such as apostrophes, or unicode characters from other languages. Testing with realistic data will make your app more robust because you'll catch errors that are likely to occur in production before release day.",
  },

  {
    title: "Why Mockaroo?",
    content:
      "There are plenty of great data mocking libraries available for almost every language and platform. But not everyone is a programmer or has time to learn a new framework. Mockaroo allows you to quickly and easily to download large amounts of randomly generated test data based on your own specs which you can then load directly into your test environment using SQL or CSV formats. No programming is required.",
  },

  {
    title: "Want to automate test data generation?",
    content:
      "If you sign in using your Google account, you can download random data programmatically by saving your schemas and using curl to download data in a shell script via a RESTful url.",
  },
];

const docs = {
  policy: [
    {
      icon: Image.word,
      name: "policy",
    },
  ],
  sop: [
    {
      icon: Image.word,
      name: "sop",
    },
  ],
  corporate_template: [
    {
      icon: Image.word,
      name: "Template",
    },
  ],
  report: [
    {
      icon: Image.vsdx,
      name: "Report",
    },
  ],
  silder: [
    {
      icon: Image.powerpoint,
      name: "Silder",
    },
  ],
};

function filterFaqs(arr, s) {
  return arr.filter((item) => {
    item.isOpen = false;
    return item.title.includes(s) || item.content.includes(s);
  });
}

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      announcements: newsData,
      news: newsData,
      imgsGallery: imgsGallery,
      videosGallery: videosGallery,
      qLinks: qLinks,
      events: events,
      faqs: faqs,
      faqsOld: faqs,
      docs: docs,
    };
  }

  renderDocs() {
    const elms = [];
    const docs = this.state.docs;

    for (var key in docs) {
      let data = docs[key];
      for (let index = 0; index < 3; index++) {
        data = [...data, ...data];
      }

      elms.push(<Doc key={key} title={key} data={data} />);
    }

    return elms;
  }

  viewMore(type) {
    switch (type) {
      case "announcements":
        this.setState({
          announcements: [...this.state.announcements, ...newsData],
        });
        break;
      case "news":
        this.setState({
          news: [...this.state.news, ...newsData],
        });
        break;
      case "events":
        this.setState({
          events: [...this.state.events, ...events],
        });
        break;
      case "faqs":
        const newData = [
          ...this.state.faqs,
          {
            title: `New question ${this.state.faqs.length + 1}`,
            content: `Question content ${this.state.faqs.length + 1}`,
          },
        ];

        this.setState({
          faqs: newData,
          faqsOld: newData,
        });
        break;

      default:
        break;
    }
  }

  render() {
    return (
      <>
        {/* <Header /> */}
        <div className="portal-homepage">
          <div className="wrap">
            <div className="header">
              <Navigation />
            </div>
            <div className="content">
              <div id="left-content">
                <div id="announcement">
                  <h1 className="main-title">Announcement</h1>
                  {this.state.announcements.map((item, i) => (
                    <CardNews
                      data={{
                        ...item,
                        name: `${item.name} ${i + 1}`,
                        img: `${item.img}/?random=${i + 1}`,
                      }}
                      key={i}
                    />
                  ))}
                  <div
                    className="view-more"
                    onClick={() => this.viewMore("announcements")}
                  >
                    View more <img src={Image.arrowicon} alt="view-more" />
                  </div>
                </div>
                <div id="news">
                  <h1 className="main-title">News</h1>
                  {this.state.news.map((item, i) => (
                    <CardNews
                      data={{
                        ...item,
                        name: `${item.name} ${i + 1}`,
                        img: `${item.img}/?random=${i + 1}`,
                      }}
                      key={i}
                    />
                  ))}
                  <div
                    className="view-more"
                    onClick={() => this.viewMore("news")}
                  >
                    View more <img src={Image.arrowicon} alt="view-more" />
                  </div>
                </div>
                <div id="image-gallery">
                  <h1 className="main-title">Image Gallery</h1>
                  <div className="gallery-content">
                    {this.state.imgsGallery.map((item, i) => (
                      <img key={i} src={item.link} alt="gallery" />
                    ))}
                  </div>
                  <div
                    className="view-more"
                    onClick={() =>
                      this.setState({
                        imgsGallery: [
                          ...this.state.imgsGallery,
                          ...imgsGallery,
                        ],
                      })
                    }
                  >
                    View more <img src={Image.arrowicon} alt="view-more" />
                  </div>
                </div>
                <div id="video-gallery">
                  <h1 className="main-title">Video Gallery</h1>
                  <div className="gallery-content">
                    {this.state.videosGallery.map((item, i) => (
                      <div className="video" key={i}>
                        <img src={item.link} alt="gallery" />
                        <div className="mask-video">
                          <AiOutlinePlayCircle />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    className="view-more"
                    onClick={() => {
                      this.setState({
                        videosGallery: [
                          ...this.state.videosGallery,
                          ...videosGallery,
                        ],
                      });
                    }}
                  >
                    View more <img src={Image.arrowicon} alt="view-more" />
                  </div>
                </div>
                <div id="document-gallery">
                  <h1 className="main-title">Document Gallery</h1>
                  <div className="doc-gallery-content">{this.renderDocs()}</div>
                </div>
              </div>
              <div id="right-content">
                <div id="quick-links">
                  <h1 className="main-title">Quick Links</h1>
                  <div className="quick-links-content">
                    {this.state.qLinks.map((item, i) => (
                      <div className="item" key={i}>
                        <img src={item.link} alt="links" />
                        <div>{item.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div id="events">
                  <h1 className="main-title">Events</h1>
                  <div className="events-content">
                    {this.state.events.map((item, i) => (
                      <Event
                        data={{
                          ...item,
                          day: (i + 1).toString().padStart(2, "0"),
                        }}
                        key={i}
                      />
                    ))}
                  </div>
                  <div
                    className="view-more"
                    onClick={() => this.viewMore("events")}
                  >
                    View more <img src={Image.arrowicon} alt="view-more" />
                  </div>
                </div>
                <div id="how-do-i">
                  <h1 className="main-title">How do I</h1>
                  <InputCustom
                    placeholder="Find Questions"
                    className="search-questions"
                    onChange={(e) => {
                      this.setState({
                        faqs: filterFaqs(this.state.faqsOld, e.target.value),
                      });
                    }}
                  />
                  <div className="faqs-container">
                    {!this.state.faqs.length && (
                      <div className="not-found">Item Not Found</div>
                    )}
                    {this.state.faqs.map((item, i) => (
                      <Faqs
                        key={i}
                        data={item}
                        id={i}
                        handleToggleActive={(i) => {
                          const newData = [...this.state.faqs];

                          newData.forEach((item, j) => {
                            if (j !== i) {
                              item.isOpen = false;
                            }
                          });

                          newData[i].isOpen = !newData[i].isOpen;

                          this.setState({
                            faqs: newData,
                          });
                        }}
                      />
                    ))}
                  </div>
                  <div
                    className="view-more"
                    onClick={() => this.viewMore("faqs")}
                  >
                    View more <img src={Image.arrowicon} alt="view-more" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

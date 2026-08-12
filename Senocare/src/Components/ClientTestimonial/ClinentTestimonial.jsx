import "./ClientTestimonial.css";
import Star from "../../assets/Image/star.png";
import VisionImg from "../../assets/Image/OurVision.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import User from "../../assets/Image/user.png";
import AJain from "../../assets/Image/ClientTestimonial/a-jain.png";
import Subraminium from "../../assets/Image/ClientTestimonial/k-subramaniam.png";
import SMital from "../../assets/Image/ClientTestimonial/s-mittal.png";
import SVohra from "../../assets/Image/ClientTestimonial/s-vohra.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SEO from "../SEO";

const ClientTestimonial = () => {
  return (
    <>
      <SEO />
      <div>
        <Header />
        <div className="header__image">
          <LazyLoadImage
            src={VisionImg}
            className="img-fluid background__img"
          />

          <h2 className="img_heading">Testimonial</h2>
        </div>
        <div className="testimonial__content">
          <section id="testimonials">
            {/* <!--heading---> */}
            {/* <div className="testimonial-heading">
            <span>Comments</span>
            <h4>Clients Says</h4>
          </div> */}
            {/* <!--testimonials-box-container------> */}
            <div className="testimonial-box-container">
              {/* <!--BOX-1--------------> */}

              <div className="testimonial-box">
                {/* <!--top-------------------------> */}
                <div className="box-top">
                  {/* <!--profile-----> */}
                  <div className="profile">
                    {/* <!--img----> */}
                    <div className="profile-img">
                      <img src={AJain} />
                    </div>
                    {/* <!--name-and-username--> */}
                    <div className="name-user">
                      <strong>A. Jain</strong>
                      {/* <span>@liammendes</span> */}
                    </div>
                  </div>
                  {/* <!--reviews------> */}
                  <div className="reviews">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/emoji/48/star-emoji.png"
                      alt="star-emoji"
                    />
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/emoji/48/star-emoji.png"
                      alt="star-emoji"
                    />
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/emoji/48/star-emoji.png"
                      alt="star-emoji"
                    />
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/emoji/48/star-emoji.png"
                      alt="star-emoji"
                    />
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/emoji/48/star-emoji.png"
                      alt="star-emoji"
                    />

                    {/* <!--Empty star--> */}
                  </div>
                </div>

                {/* <!--Comments----------------------------------------> */}
                <div className="client-comment">
                  <p>
                    I don’t think so I have come across a more genuine helping
                    hand ever in my life. I think wherever and whenever possible
                    if they can extend their services, they would and that too
                    without any challenges. They actually feel your pain and
                    understand your situation and try to be of the best support.
                    And if the family gets the best of the resources for their
                    patients then that really helps the family to fight the
                    medical trauma they are already going through. Special
                    thanks to Punita for being the wonderful woman that she is.
                  </p>
                </div>
              </div>

              <div className="testimonial-box">
                {/* <!--top-------------------------> */}
                <div className="box-top">
                  {/* <!--profile-----> */}
                  <div className="profile">
                    {/* <!--img----> */}
                    <div className="profile-img">
                      <img src={SMital} />
                    </div>
                    {/* <!--name-and-username--> */}
                    <div className="name-user">
                      <strong>Mr. S. Mittal</strong>
                      <span>Cupertino, California</span>
                    </div>
                  </div>
                  {/* <!--reviews------> */}
                  <div className="reviews">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/emoji/48/star-emoji.png"
                      alt="star-emoji"
                    />
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/emoji/48/star-emoji.png"
                      alt="star-emoji"
                    />
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/emoji/48/star-emoji.png"
                      alt="star-emoji"
                    />
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/emoji/48/star-emoji.png"
                      alt="star-emoji"
                    />
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/emoji/48/star-emoji.png"
                      alt="star-emoji"
                    />

                    {/* <!--Empty star--> */}
                  </div>
                </div>

                {/* <!--Comments----------------------------------------> */}
                <div className="client-comment">
                  <p>
                    My father died last year, leaving my mother alone in India.
                    I started wondering how to take care of my mom, as she was
                    comfortable at her home in India, and didn’t want to move to
                    the US with me. I searched online and found senOcare. I
                    thought of giving it a try and am glad that I did. Not only
                    did senOcare gave emotional support to my mother, but
                    immediately they took care of my mother’s banking and
                    healthcare needs. I will highly recommend senOcare..
                  </p>
                </div>
              </div>

              <div className="testimonial-box">
                {/* <!--top-------------------------> */}
                <div className="box-top">
                  {/* <!--profile-----> */}
                  <div className="profile">
                    {/* <!--img----> */}
                    <div className="profile-img">
                      <img src={SVohra} />
                    </div>
                    {/* <!--name-and-username--> */}
                    <div className="name-user">
                      <strong>Mrs. S.Vohra</strong>
                      <span>Mumbai, India</span>
                    </div>
                  </div>
                  {/* <!--reviews------> */}
                  <div className="reviews">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/emoji/48/star-emoji.png"
                      alt="star-emoji"
                    />
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/emoji/48/star-emoji.png"
                      alt="star-emoji"
                    />
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/emoji/48/star-emoji.png"
                      alt="star-emoji"
                    />
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/emoji/48/star-emoji.png"
                      alt="star-emoji"
                    />
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/emoji/48/star-emoji.png"
                      alt="star-emoji"
                    />

                    {/* <!--Empty star--> */}
                  </div>
                </div>

                {/* <!--Comments----------------------------------------> */}
                <div className="client-comment">
                  <p>
                    My parents live alone. My worst 2 hours last year were when
                    I landed in Delhi and I realized that they both had COVID.
                    Punita from senOcare and the rest of her team literally took
                    charge. Not just their hospitalization, but also things that
                    I needed to do around their house, whether it was the
                    sanitization or the plumbing or the electricals. And
                    suddenly I felt that… I felt supported. I felt like I had a
                    team of people I could call on and who I could rely on to do
                    things for me. I think if your parents live alone, then you
                    do need a team like that, that cares so much and loves so
                    much. And senOcare is just the right team for me
                  </p>
                </div>
              </div>

              {/* <!--BOX-2--------------> */}
              <div className="testimonial-box">
                {/* <!--top-------------------------> */}
                <div className="box-top">
                  {/* <!--profile-----> */}
                  <div className="profile">
                    {/* <!--img----> */}
                    <div className="profile-img">
                      <img src={Subraminium} />
                    </div>
                    {/* <!--name-and-username--> */}
                    <div className="name-user">
                      <strong> K. Subramaniam</strong>
                      {/* <span>@noahwood</span> */}
                    </div>
                  </div>
                  {/* <!--reviews------> */}
                  <div className="reviews">
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/emoji/48/star-emoji.png"
                      alt="star-emoji"
                    />
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/emoji/48/star-emoji.png"
                      alt="star-emoji"
                    />
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/emoji/48/star-emoji.png"
                      alt="star-emoji"
                    />
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/emoji/48/star-emoji.png"
                      alt="star-emoji"
                    />
                    <img
                      width="20"
                      height="20"
                      src="https://img.icons8.com/emoji/48/star-emoji.png"
                      alt="star-emoji"
                    />
                    {/* <!--Empty star--> */}
                  </div>
                </div>
                {/* <!--Comments----------------------------------------> */}
                <div className="client-comment">
                  <p>
                    Senocare is a very proactive and responsive organisation.
                    The whole aim is to help & assist people in whichever way
                    they can, be it hunting for medicine, lunch suppliers,
                    oxygen cylinders, beds, testing, moral support, you name it.
                    I found all the employees I interacted with, having the same
                    mindset of service to people who are helpless because of
                    their health, to get them better. I will be forever indebted
                    to Senocare, Punita and team. Wish they expand to other
                    cities in the southern part of India as well. All the best.
                  </p>
                </div>
              </div>
              {/* <!--BOX-3--------------> */}
              <div className="testimonial-box">
                {/* <!--top-------------------------> */}
                <div className="box-top">
                  {/* <!--profile-----> */}
                  <div className="profile">
                    {/* <!--img----> */}
                    <div className="profile-img">
                      <img src={User} />
                    </div>
                    {/* <!--name-and-username--> */}
                    <div className="name-user">
                      <strong>J.N Kapoor</strong>
                      {/* <span>@oliverqueen</span> */}
                    </div>
                  </div>
                  {/* <!--reviews------> */}
                  <div className="reviews">
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    {/* <!--Empty star--> */}
                  </div>
                </div>
                {/* <!--Comments----------------------------------------> */}
                <div className="client-comment">
                  <p>
                    Senocare has been the most amazing, helpful, going way
                    beyond anything to help my family. Our family could not have
                    done without them during Covid. This was at the peak when
                    everything was crashing and they stood by me one night till
                    I had the help I needed. During happier days their attitude
                    of how can we make things special, pamper the elderly, take
                    care of their needs is wonderful. The personal touch, care
                    for each little detail is so amazing. I feel I am talking to
                    a family member when I talk to them.
                  </p>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p> */}
                </div>
              </div>
              {/* <!--BOX-4--------------> */}
              <div className="testimonial-box">
                {/* <!--top-------------------------> */}
                <div className="box-top">
                  {/* <!--profile-----> */}
                  <div className="profile">
                    {/* <!--img----> */}
                    <div className="profile-img">
                      <img src={User} />
                    </div>
                    {/* <!--name-and-username--> */}
                    <div className="name-user">
                      <strong>R. Bhatnagar</strong>
                    </div>
                  </div>
                  {/* <!--reviews------> */}
                  <div className="reviews">
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                  </div>
                </div>
                {/* <!--Comments----------------------------------------> */}
                <div className="client-comment">
                  <p>
                    We were introduced to Senocare last year when we were
                    looking for support for my Father-in-law. Puneeta responded
                    to us same day and within 48 hours had arranged a full time
                    attendant. In the last 6 months we have found Senocare team
                    to be very compassionate, loving and treating ours as their
                    own family. They go above and beyond at all times. Puneeta
                    is an amazing leader and her passion for elderly care is
                    beyond anyone I have known. They have done a herculean task
                    saving so many lives in the recent wave. My best wishes to
                    the entire team and happy to endorse their efforts. God
                    bless them all
                  </p>
                </div>
              </div>
              <div className="testimonial-box">
                {/* <!--top-------------------------> */}
                <div className="box-top">
                  {/* <!--profile-----> */}
                  <div className="profile">
                    {/* <!--img----> */}
                    <div className="profile-img">
                      <img src={User} />
                    </div>
                    {/* <!--name-and-username--> */}
                    <div className="name-user">
                      <strong>D. Grover</strong>
                      {/* <span>@oliverqueen</span> */}
                    </div>
                  </div>
                  {/* <!--reviews------> */}
                  <div className="reviews">
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    {/* <!--Empty star--> */}
                  </div>
                </div>
                {/* <!--Comments----------------------------------------> */}
                <div className="client-comment">
                  <p>
                    I would recommend them for their highly professional
                    services & integrity. Their services to humanity at large
                    during COVID times are highly commendable and appreciated!
                    The team has been working 24X7 to get help to the needy
                    wherever possible. God Bless them with good health and
                    prosperity!
                  </p>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p> */}
                </div>
              </div>
              <div className="testimonial-box">
                {/* <!--top-------------------------> */}
                <div className="box-top">
                  {/* <!--profile-----> */}
                  <div className="profile">
                    {/* <!--img----> */}
                    <div className="profile-img">
                      <img src={User} />
                    </div>
                    {/* <!--name-and-username--> */}
                    <div className="name-user">
                      <strong> S. Kapoor </strong>
                      {/* <span>@oliverqueen</span> */}
                    </div>
                  </div>
                  {/* <!--reviews------> */}
                  <div className="reviews">
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    {/* <!--Empty star--> */}
                  </div>
                </div>
                {/* <!--Comments----------------------------------------> */}
                <div className="client-comment">
                  <p>
                    Can’t thank senocare team and Punita especially for helping
                    us out with immediate help once my parents got deducted with
                    covid. Though I lost my father to the dreadful disease but
                    without the help of senocare,I don’t think he wud have
                    survived even for a day. Thanks for such a wonderful team
                    work. You are truly god sent to our society god bless u all.
                  </p>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p> */}
                </div>
              </div>
              <div className="testimonial-box">
                {/* <!--top-------------------------> */}
                <div className="box-top">
                  {/* <!--profile-----> */}
                  <div className="profile">
                    {/* <!--img----> */}
                    <div className="profile-img">
                      <img src={User} />
                    </div>
                    {/* <!--name-and-username--> */}
                    <div className="name-user">
                      <strong>S. Chhabra</strong>
                      {/* <span>@oliverqueen</span> */}
                    </div>
                  </div>
                  {/* <!--reviews------> */}
                  <div className="reviews">
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    {/* <!--Empty star--> */}
                  </div>
                </div>
                {/* <!--Comments----------------------------------------> */}
                <div className="client-comment">
                  <p>
                    My wife Vernika and I found Senocare to be extremely
                    responsive in proactively supporting and helping us find
                    solutions for many issues we grappled with for our parents
                    who were diagnosed as Covid positive in N Delhi. Puneeta is
                    extremely compassionate and we found her available 24/7 to
                    assist and support in whatever we requested and the services
                    were made available immediately. We can’t thank Puneeta /
                    Senocare enough for being with us in these trying times.{" "}
                  </p>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p> */}
                </div>
              </div>
              <div className="testimonial-box">
                {/* <!--top-------------------------> */}
                <div className="box-top">
                  {/* <!--profile-----> */}
                  <div className="profile">
                    {/* <!--img----> */}
                    <div className="profile-img">
                      <img src={User} />
                    </div>
                    {/* <!--name-and-username--> */}
                    <div className="name-user">
                      <strong>S. Ghosh</strong>
                      {/* <span>@oliverqueen</span> */}
                    </div>
                  </div>
                  {/* <!--reviews------> */}
                  <div className="reviews">
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    {/* <!--Empty star--> */}
                  </div>
                </div>
                {/* <!--Comments----------------------------------------> */}
                <div className="client-comment">
                  <p>
                    Senocare took excellent care of facilitating multiple
                    activities for my parents aged 82 and 75. They were impacted
                    by their sole live in help, cook testing positive for COVID.
                    The senocare team organized – Teleconsultation with doctors
                    – Medicine delivery to our home – Laboratory testing for
                    COVID and other symptoms to be conducted at home Jessica was
                    also able to organize food and an attendant which thankfully
                    was not required
                  </p>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p> */}
                </div>
              </div>
              <div className="testimonial-box">
                {/* <!--top-------------------------> */}
                <div className="box-top">
                  {/* <!--profile-----> */}
                  <div className="profile">
                    {/* <!--img----> */}
                    <div className="profile-img">
                      <img src={User} />
                    </div>
                    {/* <!--name-and-username--> */}
                    <div className="name-user">
                      <strong>D. Dhall</strong>
                      {/* <span>@oliverqueen</span> */}
                    </div>
                  </div>
                  {/* <!--reviews------> */}
                  <div className="reviews">
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    {/* <!--Empty star--> */}
                  </div>
                </div>
                {/* <!--Comments----------------------------------------> */}
                <div className="client-comment">
                  <p>
                    Really good service. The lady whom I spoke to was really
                    polite in her behaviour and listened to my requirements
                    really patiently. Would definitely recommend these guys!
                  </p>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p> */}
                </div>
              </div>
              <div className="testimonial-box">
                {/* <!--top-------------------------> */}
                <div className="box-top">
                  {/* <!--profile-----> */}
                  <div className="profile">
                    {/* <!--img----> */}
                    <div className="profile-img">
                      <img src={User} />
                    </div>
                    {/* <!--name-and-username--> */}
                    <div className="name-user">
                      <strong>G. Chawla</strong>
                      {/* <span>@oliverqueen</span> */}
                    </div>
                  </div>
                  {/* <!--reviews------> */}
                  <div className="reviews">
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    {/* <!--Empty star--> */}
                  </div>
                </div>
                {/* <!--Comments----------------------------------------> */}
                <div className="client-comment">
                  <p>
                    Excellent experience in home care!! The service was
                    diligent, comprehensive with sincere human touch. God Bless
                    the team !!
                  </p>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p> */}
                </div>
              </div>
              <div className="testimonial-box">
                {/* <!--top-------------------------> */}
                <div className="box-top">
                  {/* <!--profile-----> */}
                  <div className="profile">
                    {/* <!--img----> */}
                    <div className="profile-img">
                      <img src={User} />
                    </div>
                    {/* <!--name-and-username--> */}
                    <div className="name-user">
                      <strong> Mr. P. Geevarghese</strong>
                      {/* <span>@oliverqueen</span> */}
                    </div>
                  </div>
                  {/* <!--reviews------> */}
                  <div className="reviews">
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    {/* <!--Empty star--> */}
                  </div>
                </div>
                {/* <!--Comments----------------------------------------> */}
                <div className="client-comment">
                  <p>
                    Senocare has proven to be a blessing for me and my family
                    during covid hardship. Their staff are so caring, my parents
                    were very happy with the services. I would recommend them to
                    anyone who wishes for home care services.
                  </p>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p> */}
                </div>
              </div>
              <div className="testimonial-box">
                {/* <!--top-------------------------> */}
                <div className="box-top">
                  {/* <!--profile-----> */}
                  <div className="profile">
                    {/* <!--img----> */}
                    <div className="profile-img">
                      <img src={User} />
                    </div>
                    {/* <!--name-and-username--> */}
                    <div className="name-user">
                      <strong>Ms. A.S. Akhtar</strong>
                      {/* <span>@oliverqueen</span> */}
                    </div>
                  </div>
                  {/* <!--reviews------> */}
                  <div className="reviews">
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    {/* <!--Empty star--> */}
                  </div>
                </div>
                {/* <!--Comments----------------------------------------> */}
                <div className="client-comment">
                  <p>
                    Excellent service and most compassionate staff. During the
                    high surge of cases in COVID during the second wave in
                    Delhi, Senocare staff were god-sent! Really a ray of hope in
                    the most terrible times. God bless you guys.
                  </p>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p> */}
                </div>
              </div>
              <div className="testimonial-box">
                {/* <!--top-------------------------> */}
                <div className="box-top">
                  {/* <!--profile-----> */}
                  <div className="profile">
                    {/* <!--img----> */}
                    <div className="profile-img">
                      <img src={User} />
                    </div>
                    {/* <!--name-and-username--> */}
                    <div className="name-user">
                      <strong>Mr. R. Malhotra</strong>
                      {/* <span>@oliverqueen</span> */}
                    </div>
                  </div>
                  {/* <!--reviews------> */}
                  <div className="reviews">
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    {/* <!--Empty star--> */}
                  </div>
                </div>
                {/* <!--Comments----------------------------------------> */}
                <div className="client-comment">
                  <p>
                    Very prompt in their availability and extremely
                    understanding and helpful. Always solution oriented. Great
                    experience and would recommend to all.
                  </p>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p> */}
                </div>
              </div>
              <div className="testimonial-box">
                {/* <!--top-------------------------> */}
                <div className="box-top">
                  {/* <!--profile-----> */}
                  <div className="profile">
                    {/* <!--img----> */}
                    <div className="profile-img">
                      <img src={User} />
                    </div>
                    {/* <!--name-and-username--> */}
                    <div className="name-user">
                      <strong>Mr. D. Yadav</strong>
                      {/* <span>@oliverqueen</span> */}
                    </div>
                  </div>
                  {/* <!--reviews------> */}
                  <div className="reviews">
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    {/* <!--Empty star--> */}
                  </div>
                </div>
                {/* <!--Comments----------------------------------------> */}
                <div className="client-comment">
                  <p>
                    One of the finest eldercare company in the country. highly
                    recommend their services for patient care & elder care. Very
                    well trained staff.
                  </p>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p> */}
                </div>
              </div>
              <div className="testimonial-box">
                {/* <!--top-------------------------> */}
                <div className="box-top">
                  {/* <!--profile-----> */}
                  <div className="profile">
                    {/* <!--img----> */}
                    <div className="profile-img">
                      <img src={User} />
                    </div>
                    {/* <!--name-and-username--> */}
                    <div className="name-user">
                      <strong>Ms. M. Joseph</strong>
                      {/* <span>@oliverqueen</span> */}
                    </div>
                  </div>
                  {/* <!--reviews------> */}
                  <div className="reviews">
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    {/* <!--Empty star--> */}
                  </div>
                </div>
                {/* <!--Comments----------------------------------------> */}
                <div className="client-comment">
                  <p>
                    I feel I have come across a more genuine helping hand ever
                    in my life. I think wherever and whenever possible if they
                    can extend their services, they would and that too without
                    any challenges. It’s the best platform.
                  </p>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p> */}
                </div>
              </div>

              <div className="testimonial-box">
                {/* <!--top-------------------------> */}
                <div className="box-top">
                  {/* <!--profile-----> */}
                  <div className="profile">
                    {/* <!--img----> */}
                    <div className="profile-img">
                      <img src={User} />
                    </div>
                    {/* <!--name-and-username--> */}
                    <div className="name-user">
                      <strong>Mr. A. Kumar </strong>
                      {/* <span>@oliverqueen</span> */}
                    </div>
                  </div>
                  {/* <!--reviews------> */}
                  <div className="reviews">
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    {/* <!--Empty star--> */}
                  </div>
                </div>
                {/* <!--Comments----------------------------------------> */}
                <div className="client-comment">
                  <p>
                    They are going beyond their limits to help the patient.
                    Extremely polite and dedicated staff. Special thanks Punita
                    Maam, Sarthak Sir, Priya Maam and the senOcare team for
                    helping out during this time of the Pandemic.
                  </p>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p> */}
                </div>
              </div>

              <div className="testimonial-box">
                {/* <!--top-------------------------> */}
                <div className="box-top">
                  {/* <!--profile-----> */}
                  <div className="profile">
                    {/* <!--img----> */}
                    <div className="profile-img">
                      <img src={User} />
                    </div>
                    {/* <!--name-and-username--> */}
                    <div className="name-user">
                      <strong>Ms. M. Sharma</strong>
                      {/* <span>@oliverqueen</span> */}
                    </div>
                  </div>
                  {/* <!--reviews------> */}
                  <div className="reviews">
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    {/* <!--Empty star--> */}
                  </div>
                </div>
                {/* <!--Comments----------------------------------------> */}
                <div className="client-comment">
                  <p>
                    You guys are really doing very good work. All the best
                    senOcare team and God bless you.
                  </p>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p> */}
                </div>
              </div>

              <div className="testimonial-box">
                {/* <!--top-------------------------> */}
                <div className="box-top">
                  {/* <!--profile-----> */}
                  <div className="profile">
                    {/* <!--img----> */}
                    <div className="profile-img">
                      <img src={User} />
                    </div>
                    {/* <!--name-and-username--> */}
                    <div className="name-user">
                      <strong>Mr. K. Singh</strong>
                      {/* <span>@oliverqueen</span> */}
                    </div>
                  </div>
                  {/* <!--reviews------> */}
                  <div className="reviews">
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    {/* <!--Empty star--> */}
                  </div>
                </div>
                {/* <!--Comments----------------------------------------> */}
                <div className="client-comment">
                  <p>
                    Quick delivery provided, precautions are taken while
                    delivery and very helpful service.
                  </p>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p> */}
                </div>
              </div>

              <div className="testimonial-box">
                {/* <!--top-------------------------> */}
                <div className="box-top">
                  {/* <!--profile-----> */}
                  <div className="profile">
                    {/* <!--img----> */}
                    <div className="profile-img">
                      <img src={User} />
                    </div>
                    {/* <!--name-and-username--> */}
                    <div className="name-user">
                      <strong>Ms. S. Anwar</strong>
                      {/* <span>@oliverqueen</span> */}
                    </div>
                  </div>
                  {/* <!--reviews------> */}
                  <div className="reviews">
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    {/* <!--Empty star--> */}
                  </div>
                </div>
                {/* <!--Comments----------------------------------------> */}
                <div className="client-comment">
                  <p>
                    They are doing a great job, really admire and thanks them
                    for doing such wonderful work for the society
                  </p>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p> */}
                </div>
              </div>

              <div className="testimonial-box">
                {/* <!--top-------------------------> */}
                <div className="box-top">
                  {/* <!--profile-----> */}
                  <div className="profile">
                    {/* <!--img----> */}
                    <div className="profile-img">
                      <img src={User} />
                    </div>
                    {/* <!--name-and-username--> */}
                    <div className="name-user">
                      <strong>Mr. S. Kumar</strong>
                      {/* <span>@oliverqueen</span> */}
                    </div>
                  </div>
                  {/* <!--reviews------> */}
                  <div className="reviews">
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    {/* <!--Empty star--> */}
                  </div>
                </div>
                {/* <!--Comments----------------------------------------> */}
                <div className="client-comment">
                  <p>
                    Amazing bunch of helpful people doing great work, supportive
                    at every step of the integration. Thanks senOcare.
                  </p>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p> */}
                </div>
              </div>

              <div className="testimonial-box">
                {/* <!--top-------------------------> */}
                <div className="box-top">
                  {/* <!--profile-----> */}
                  <div className="profile">
                    {/* <!--img----> */}
                    <div className="profile-img">
                      <img src={User} />
                    </div>
                    {/* <!--name-and-username--> */}
                    <div className="name-user">
                      <strong>Mr. A. Joseph</strong>
                      {/* <span>@oliverqueen</span> */}
                    </div>
                  </div>
                  {/* <!--reviews------> */}
                  <div className="reviews">
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    <img src={Star} width="20" height="20" alt="star-emoji" />
                    {/* <!--Empty star--> */}
                  </div>
                </div>
                {/* <!--Comments----------------------------------------> */}
                <div className="client-comment">
                  <p>Class service and very professional. Loved it.</p>
                  {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque.</p> */}
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ClientTestimonial;

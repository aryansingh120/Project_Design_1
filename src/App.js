import './App.css';
import Contact from './Compornants/Contact';
import Experience from './Compornants/Experience';
import Footer from './Compornants/Footer';
import Header from './Compornants/Header';
import Nav from './Compornants/Nav';
import Portfolio from './Compornants/Portfolio';
import Reviews from './Compornants/Reviews';
import Skills from './Compornants/Skills';

function App() {
  let navArr=["About","Skill","Portfolio","Testimonial","Download CV"];
 let expArr=[{num:"80+",text:"Satisfied clients"},{num:"200+",text:"Projects completed"},{num:"99+",text:"Reviews given"}];
 let skillArr=[{img:"/photos/diamond.png",text1:"Visual Design",text2:"Create user interface design with unique & modern ideas"},{img:"/photos/pulse.png",text1:"Design Prototype",text2:"Create advance design prototype with Figma apps."},{img:"/photos/school.png",text1:"UX Research",text2:"Create digital user products with updated ideas"}]
 let portArr=["/photos/Mask.png","/photos/group2.png","/photos/Group3.png"] ;
 let portArr2=["/photos/Group 8934.png","/photos/Rectangle 2057 (2).png","/photos/Rectangle 2057 (2).png","/photos/arrow2.png","/photos/arrow3.png"];
 let revArr1=[{text1:"We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company",img:"/photos/man.png",text2:"Amir Uddin",text3:"UX Designer"},{text1:"We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company",img:"/photos/man2.png",text2:"Salim Ahmed",text3:"UI Designer "},{text1:"We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company",img:"/photos/man3.png",text2:"Guy Hawkins",text3:"Ux Designer "}]
 let revArr2=["/photos/star 1.png","/photos/star 1.png","/photos/star 1.png","/photos/star 1.png","/photos/star 1.png"];
 let conArr=[{img:"/photos/phone.png",text1:"Call me",text2:"+8801613968687"},{img:"/photos/messege.png",text1:"Email me",text2:"ahmedtanvir8687@gmail.com"},{img:"/photos/location.png",text1:"Address",text2:"Zakigonj, Sylhet, Bangladesh."}]
 let fooArr=["/photos/facebook.png","/photos/twitter.png","/photos/linkedin.png","/photos/instagram.png"]
let x=[{text1:"We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company",img:"/photos/man.png",text2:"Amir Uddin",text3:"UX Designer",img5:["/photos/star 1.png","/photos/star 1.png","/photos/star 1.png","/photos/star 1.png","/photos/star 1.png"]},{text1:"We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company",img:"/photos/man2.png",text2:"Salim Ahmed",text3:"UI Designer ",img5:["/photos/star 1.png","/photos/star 1.png","/photos/star 1.png","/photos/star 1.png","/photos/star 1.png"]},{text1:"We will also facilitate the business marketing of these products with our SEO experts so that they become a ready to use website & help sell product from company",img:"/photos/man3.png",text2:"Guy Hawkins",text3:"Ux Designer ",img5:["/photos/star 1.png","/photos/star 1.png","/photos/star 1.png","/photos/star 1.png","/photos/star 1.png"]}]
 return (
    <div>
      <Nav data={navArr}/>
      <Header/>
      <Experience data={expArr}/>
      <Skills data={skillArr}/>
      <Portfolio data ={portArr} data2={portArr2}/>
      {/* <Reviews data1={revArr1} data2={revArr2}/> */}
      <Reviews data1={x}/>

      <Contact data={conArr}/>
      <Footer data={fooArr}/>
      







    </div>
  );
}

export default App;

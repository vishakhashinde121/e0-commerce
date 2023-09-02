import React, { useEffect, useState } from 'react'
import Authuser from '../authentication/Authuser';


const Catagorry = () => {
  const{http,token}=Authuser();
    const [catg, setcatg] = useState([]);

    useEffect(() => {
http.get(`/categories`)
        // fetch(`https://vsmart.ajspire.com/api`)
        //     .then((response) => response.json())
            .then((data) => {
                setcatg(data.categories);
                console.log(setcatg);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [token]);
  return (
    <div>

 

        <div className="container">
       

          <div className="row">
          




        
          {
            catg.slice(0,20).map((el)     => (



          
            <div className="col-md-6 col-xl-4 col-sm-6 col-lg-4 p-b-30 m-lr-auto">
              <div className="block1 wrap-pic-w">
                <img src={el.category_banner} alt="IMG-BANNER" style={{height:"400px",width:"400px"}}/>
                <a
                  href="product.html"
                  className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
                >
                  <div className="block1-txt-child1 flex-col-l">
                    <span className="block1-name ltext-102 trans-04 p-b-8" style={{justifyContent: 'end'}}>
                      {el.category_name}
                    </span>
                    <span className="block1-info stext-102 trans-04">
                      {el.updated_at}
                    </span>
                  </div>
                  <div className="block1-txt-child2 p-b-4 trans-05">
                    <div className="block1-link stext-101 cl0 trans-09">
                      Shop Now
                    </div>
                  </div>
                </a>
                
              </div>
            </div>
              ))
        }
          </div>
          </div>
        </div>
    
    
  )
}

export default Catagorry
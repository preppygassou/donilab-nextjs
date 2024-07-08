import React, { useCallback, useEffect, useState } from "react";
import parse from "html-react-parser";
import Gist from "super-react-gist";



export default function WpApiContent(props) {
  const [state, setstate] = useState(props.content);
/* 
  function myFunction() {
    let thestr;
    if (props.content.length > 100) {
       thestr = props.content = props.content.substring(0,90);
    }
    return thestr;
  }
 */
  useEffect(() => {
   
      function myFunction() {
        let thestr;
        if (props.content.length > 100) {
           thestr = props.content = props.content.substring(0,90);
        }
        return thestr;
      }
      setstate(myFunction)
    
  }, [props])

  return parse(state, {
    replace: (domNode) => {
      if(domNode.name === "script" && domNode.attribs.src.indexOf("/gist.github.com/") ) {
        return (<Gist url={domNode.attribs.src.replace(".js", "")} />)
      }
    }
  });
}

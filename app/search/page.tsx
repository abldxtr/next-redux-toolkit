"use client";

import classNames from "classnames";
import { useEffect, useState } from "react";

export default function Search() {
  const txt =
    "my name is abol. about my past carrer is hard to talk but i have some special for past you and for other people in this room don't give up. see how news around me work. so work hard for you features. thanks";
  const [token, setToken] = useState("");
  const [highlight, setHighlight] = useState<string[]>([]);
  const [text, setText] = useState(txt);
  const [t_s, setT_s] = useState<string[]>(text.split(" "));

  //   const t_s = text.split(" ");
  // setT_s()
  function containsSpaceNotAtStart(str: string) {
    const regex = /^(?! ).* .*$/;
    return regex.test(str);
  }

  function search(list: string[], chars: string) {
    console.log("list", list, chars.length);
    let res_one = [];
    // console.log("res_one", res_one);

    for (var item of list) {
      for (var ii = 0; ii < chars.length; ii++) {
        if (item.charAt(ii) === chars.charAt(ii)) {
          if (ii + 1 === chars.length) {
            res_one.push(item);
          }
        } else {
          break;
        }
      }
    }
    console.log([...new Set(res_one)]);
    return [...new Set(res_one)];
  }
  useEffect(() => {
    // search(t_s, token)
    // console.log("useeffect", token.length);
    if (containsSpaceNotAtStart(token)) {
      setT_s(text.split(""));
      let res = search(text.split(""), token);
      setHighlight(res);
    } else {
      if (token.length === 0) {
        setT_s(text.split(" "));

        console.log("token", token);
        console.log("t_s", t_s);

        setHighlight([]);
      } else {
        setT_s(text.split(" "));

        console.log("toke else", token);

        var result = search(t_s, token);

        setHighlight(result);
      }
    }
  }, [token, setToken, t_s, text]);
  //   let highlight = search(t_s, "past");
  //   console.log(highlight);

  return (
    <div className="w-full max-w-lg mx-auto mt-8">
      <div className="flex w-full flex-col gap-4">
        <div>
          <input
            className=" bg-gray-200 rounded-md border-gray-100 "
            type="text"
            onChange={(e) => setToken(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap ">
          {t_s.map((item, index) => {
            const isHighlight = highlight.some((it) => it === item);
            return (
              <span
                key={index}
                className={classNames("mr-1 ", isHighlight && "bg-blue-100")}
              >
                {item}
              </span>
            );
            // for (let ii of highlight) {
            //   //   console.log("index", index);
            //   //   console.log("ii", ii, item);
            //   if (ii === item) {
            //     return (
            //       <span key={index} className="bg-blue-300 mr-[1px]">
            //         {item}
            //       </span>
            //     );
            //   } else {
            //     // console.log("else", item);
            //     return (
            //       <span key={index} className="mr-[0.5px]">
            //         {item}{" "}
            //       </span>
            //     );
            //   }
            // }
            // return <div key={index}>aaaaaaaa</div>;
          })}
        </div>
      </div>
    </div>
  );
}

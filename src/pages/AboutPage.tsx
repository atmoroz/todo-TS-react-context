import React from "react";
import { useHistory } from "react-router-dom";

const AboutPages: React.FC = () => {
  let history = useHistory();
  return (
    <div className="aboutPage">
      <h2 className="center">About Page</h2>
      <div className="aboutText">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
        laboriosam quasi saepe, vero deserunt tempora, reiciendis magni veniam,
        numquam quaerat voluptate animi aut perferendis tenetur pariatur
        obcaecati. Quo, sunt amet. Explicabo incidunt quae, adipisci odio
        tenetur, iure vitae, qui illo quidem laboriosam ab dolorum sequi.
        Laudantium porro debitis accusamus unde odit molestias, sit et, mollitia
        esse accusantium eaque, hic reprehenderit. Ea sequi corrupti odit
        voluptas quaerat nobis quasi praesentium blanditiis dignissimos maiores
        officia, autem architecto deserunt non! Accusamus natus ratione
        voluptatibus corporis, id dolor nobis quod, nostrum fugiat est vero!
        Fugit aperiam cumque illum assumenda dicta. Molestias, officiis! Ab enim
        dignissimos placeat voluptate ipsam quos aspernatur inventore laudantium
        nisi. Quibusdam ipsum delectus eos consequuntur autem ullam ratione
        quaerat optio culpa! Veniam provident incidunt fugiat doloribus debitis
        aliquam cumque quidem, velit itaque expedita quibusdam iste magni rem
        perferendis optio minus facilis ut, eveniet praesentium exercitationem
        unde est repellat culpa placeat. Dignissimos.
      </div>
      <button className="btn" onClick={() => history.push("/")}>
        Вернуться к списку дел
      </button>
    </div>
  );
};
export default AboutPages;

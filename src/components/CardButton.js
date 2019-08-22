import * as React from "react";
import Card from "../components/CardComponent";
const images = {
  source: [
    {
      uri:
        "https://images.pexels.com/photos/1516648/pexels-photo-1516648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      uri:
        "https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png"
    },
    {
      uri:
        "https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg"
    },
    {
      uri:
        "https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg"
    },
    {
      uri:
        "https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?cs=srgb&dl=desk-doctor-health-48604.jpg&fm=jpg"
    }
  ]
};
export default class CardButton extends React.Component {
  render() {
    return (
      <Card
        images={images}
        place="kakinada"
        Spec="Cardiologist"
        Name="Wings Medicare "
      />
    );
  }
}

import React, { Fragment, useState } from "react";
import Image from "next/image";
import ImaginedHeader from "../../shared/components/ImaginedHeader/ImaginedHeader";
import {
  DoorsBackground,
  DoorsContainer,
  Door,
  DoorSelection,
  DoorSelectionItem,
  DoorDescription,
} from "./DoorsStyles";

const doors = [
  {
    id: "1",
    price: "145",
  },
  {
    id: "2",
    price: "140",
  },
  {
    id: "3",
    price: "150",
  },
  {
    id: "4",
    price: "180",
  },
  {
    id: "5",
    price: "175",
  },
  {
    id: "6",
    price: "225",
  },
  {
    id: "7",
    price: "160",
  },
  {
    id: "8",
    price: "170",
  },
];

const Doors = () => {
  const [index, setIndex] = useState(1);

  return (
    <Fragment>
      <ImaginedHeader />
      <DoorsContainer>
        <DoorsBackground>
          <img
            sizes="(max-width: 1999px) 100vw, 1999px"
            srcSet="
            /images/Products/background-3_t9dbpn_c_scale,w_190.jpg 190w,
            /images/Products/background-3_t9dbpn_c_scale,w_647.jpg 647w,
            /images/Products/background-3_t9dbpn_c_scale,w_957.jpg 957w,
            /images/Products/background-3_t9dbpn_c_scale,w_1235.jpg 1235w,
            /images/Products/background-3_t9dbpn_c_scale,w_1387.jpg 1387w,
            /images/Products/background-3_t9dbpn_c_scale,w_1528.jpg 1528w,
            /images/Products/background-3_t9dbpn_c_scale,w_1679.jpg 1679w,
            /images/Products/background-3_t9dbpn_c_scale,w_1833.jpg 1833w,
            /images/Products/background-3_t9dbpn_c_scale,w_1999.jpg 1999w"
            src="/images/Products/background-3_t9dbpn_c_scale,w_1999.jpg"
            alt=""
          />

          <Door>
            <img
              // layout="fill"
              // loading="eager"
              // priority="true"
              src={`/images/Products/door-${index}.jpg`}
            />
          </Door>
          <DoorDescription>
            <div>Cena</div>
            <div>{doors[index - 1].price}&#8364;</div>
            <div>sa PDV-om</div>
            <div>* cena uključuje standardnu kvaku i montažu</div>
          </DoorDescription>
        </DoorsBackground>
        <DoorSelection>
          {doors.map((item) => (
            <DoorSelectionItem
              key={item.id}
              onClick={() => {
                setTimeout(() => {
                  setIndex(item.id);
                }, 500);
              }}
            >
              <Image
                layout="fill"
                objectFit="cover"
                priority="true"
                src={`/images/Products/door-${item.id}-small.jpg`}
              />
            </DoorSelectionItem>
          ))}
        </DoorSelection>
      </DoorsContainer>
    </Fragment>
  );
};

export default Doors;

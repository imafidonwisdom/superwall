import React from "react";
import { Link, useParams } from "react-router-dom";
import { InfoSection } from "../general_components/InfoSection";
import { MainContainer } from "../MainContainer";
import { SectionWrapper } from "../general_components/SectionWrapper";
import { CustomCard } from "../general_components/CustomCard";

import { nftCompetitionData } from "../../data/nftCompetitionData";
import { useEffect } from "react";
import { useState } from "react";
import {
  CompetitionImage,
  CompetitionHeading,
  FlexBetweenContainer,
  FlexStartContainer,
  NftValue,
  Divider,
  Icon,
  CloseDate,
  CompetitionDescription,
} from "./styles";
import { CustomCardText } from "../general_components/CustomCardText";

export const Competition = () => {
  const { id } = useParams();
  const [competitionInfo, setCompetitionInfo] = useState({});
  useEffect(() => {
    setCompetitionInfo(
      nftCompetitionData.find((comp) => comp.id === parseInt(id))
    );
  }, []);
  return (
    <MainContainer>
      <div>
        <InfoSection />
        <SectionWrapper id="competitionDetails">
          <CompetitionImage
            src={competitionInfo.imgSrc}
            alt={competitionInfo.name}
          />
          <CompetitionHeading>
            {competitionInfo.name}
            <i className="fa-solid fa-circle-check ms-1 text-primary"></i>
          </CompetitionHeading>
          <FlexBetweenContainer className="mb-2">
            <Link to={""}>#{competitionInfo.mintNumber}</Link>
            <NftValue>
              Value: <span>${competitionInfo.value}</span>
            </NftValue>
          </FlexBetweenContainer>
          <Divider />
          <FlexStartContainer className="my-2">
            <Icon className="fa-solid fa-hourglass-end my-auto me-2"></Icon>
            <CloseDate>Closes: {competitionInfo.closeDate}</CloseDate>
          </FlexStartContainer>
          <Divider />
          <CompetitionDescription>
            {competitionInfo.description}
          </CompetitionDescription>
        </SectionWrapper>
        <SectionWrapper>
          <CustomCard>
            <h3 className="text-center mt-2 text-uppercase">
              Enter Competition
            </h3>
            <CustomCardText className="text-center my-4">
              You have used <span className="text-danger">0</span> of{" "}
              <span className="text-danger">465</span> entries
            </CustomCardText>
          </CustomCard>
        </SectionWrapper>
      </div>
    </MainContainer>
  );
};

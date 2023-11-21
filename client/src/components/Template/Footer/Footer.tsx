import Logo from "../../../assets/logo.svg";
import Instagram from "../../../assets/instagram.png";
import Facebook from "../../../assets/facebook.png";
import Tweeter from "../../../assets/twitter.png";
import Pinterest from "../../../assets/pinterest.png";
import AppleStore from "../../../assets/appleStore.png";
import GooglePlay from "../../../assets/googlePlay.png";
import { corporationOptions, helpOptions } from "../../../services/database.ts";
import {
  Foot,
  DivContainer,
  DivLeft,
  DivLogos,
  StoreLogo,
  UlSocialMedia,
  LiSocialMedia,
  AnchorMedias,
  ImgMediaLogos,
  DivTerms,
  SpanTerms,
  DivRight,
  DivColumns,
  TitleColumns,
  UlOptions,
  Li,
  UlDownload,
  LiDownload,
  AnchorStores,
  ImgStores,
} from "./styles.ts";
import { nanoid } from "nanoid";

function Footer() {
  return (
    <Foot>
      <DivContainer>
        <DivLeft>
          <DivLogos>
            <StoreLogo src={Logo} alt="Store's logo" />
            <UlSocialMedia>
              <LiSocialMedia>
                <AnchorMedias to="https://www.instagram.com/" target="_blank">
                  <ImgMediaLogos src={Instagram} alt="Instagram logo" />
                </AnchorMedias>
              </LiSocialMedia>
              <LiSocialMedia>
                <AnchorMedias to="https://www.facebook.com/" target="_blank">
                  <ImgMediaLogos src={Facebook} alt="Facebook logo" />
                </AnchorMedias>
              </LiSocialMedia>
              <LiSocialMedia>
                <AnchorMedias to="https://www.twitter.com/" target="_blank">
                  <ImgMediaLogos src={Tweeter} alt="Tweeter logo" />
                </AnchorMedias>
              </LiSocialMedia>
              <LiSocialMedia>
                <AnchorMedias to="https://www.pinterest.com/" target="_blank">
                  <ImgMediaLogos src={Pinterest} alt="Pinterest logo" />
                </AnchorMedias>
              </LiSocialMedia>
            </UlSocialMedia>
          </DivLogos>
          <DivTerms>
            <SpanTerms>TERMOS E CONDIÇÕES</SpanTerms>
            <SpanTerms>POLÍTICA DE PRIVACIDADE</SpanTerms>
          </DivTerms>
        </DivLeft>
        <DivRight>
          <DivColumns>
            <TitleColumns>Ajuda e informações</TitleColumns>
            <UlOptions>
              {helpOptions.map((options) => (
                <Li key={nanoid()}>{options}</Li>
              ))}
            </UlOptions>
          </DivColumns>
          <DivColumns>
            <TitleColumns>Institucional</TitleColumns>
            <UlOptions>
              {corporationOptions.map((options) => (
                <Li key={nanoid()}>{options}</Li>
              ))}
            </UlOptions>
          </DivColumns>
          <DivColumns>
            <TitleColumns>Download</TitleColumns>
            <UlDownload>
              <LiDownload>
                <AnchorStores
                  to="https://www.apple.com/br/app-store/"
                  target="_blank"
                >
                  <ImgStores src={AppleStore} alt="Apple store link" />
                </AnchorStores>
              </LiDownload>
              <LiDownload>
                <AnchorStores
                  to="https://play.google.com/store/apps/"
                  target="_blank"
                >

                  <ImgStores src={GooglePlay} alt="Google play store link" />

                </AnchorStores>
              </LiDownload>
            </UlDownload>
          </DivColumns>
        </DivRight>
      </DivContainer>
    </Foot>
  );
}

export default Footer;
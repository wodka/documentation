import React from 'react';
import ThemedImage from '@theme/ThemedImage';

import { TwoColumnSection } from '../../twoColumnSection/TwoColumnSection';
import {
  TextColumn,
  TextColumnText,
  TextColumnTitle,
} from '../../twoColumnSection/TextColumn';
import { ImageColumn } from '../../twoColumnSection/ImageColumn';
import { GradientText } from '../../../GradientText';
import { FeatureHeader } from '../FeatureHeader';
import { COMMENTS } from '../hashLinks';

export const CommentsFeature = () => {
  return (
    <>
      <FeatureHeader title="Comment on translations" id={COMMENTS} />
      <TwoColumnSection>
        <TextColumn className="row-start-2 col-start-1 md:row-start-1">
          <TextColumnTitle>Say what you think.</TextColumnTitle>
          <TextColumnText>
            Something look off? Tell others what you would change. You can
            comment <GradientText>every translation</GradientText> on Tolgee
            platform.
          </TextColumnText>
        </TextColumn>
        <ImageColumn className="row-start-1 col-start-1 md:col-start-2">
          <ThemedImage
            alt="Translation memory"
            sources={{
              light: '/img/features/translation-comments-light.svg',
              dark: '/img/features/translation-comments-dark.svg',
            }}
          />
        </ImageColumn>
      </TwoColumnSection>
    </>
  );
};

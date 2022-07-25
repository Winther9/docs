import React, { useMemo } from 'react';

import DefaultLayout from './default';
import Header from '../components/Header';
import {DesktopPageNavigation} from '../components/PageNavigation';
import CustomMDXProvider, {textToId, parseHeader} from '../components/MdxProvider';

interface Header {
  type: 'h2' | 'h3',
  text: string
}

export default function MdxLayout(props: {children: React.ReactNode, location: Location, pageContext: any, path: string, pageResources: any}) {
  const children = React.Children.toArray(props.children);
  const headers : Header[] =
    children
    .filter((child: any) => child.props?.mdxType === "h2" || child.props?.mdxType === "h3")
    .map((child: any) => ({type: child.props?.mdxType, text: child.props?.children}));

  const overviewHeader = 
    children[0] && (children[0] as any).props.mdxType === "p" ? {type: "h2", text: "Overview"} : null

  const pageNavigationItems =
    (overviewHeader && headers.length ? [overviewHeader] : []).concat(headers).map(header => {


      return {
        level: header.type === 'h3' ? 2 : 1,
        text: parseHeader(header.text),
        link: `#${textToId(header.text)}`
      };
    });

  const isEmbedded = props.pageContext?.isEmbedded;

  return (
    <DefaultLayout {...props} pageNavigationItems={pageNavigationItems}>
      <div className="relative z-20 prose max-w-none pb-48">
        <CustomMDXProvider>
          {props.children}
        </CustomMDXProvider>
      </div>
      <DesktopPageNavigation
        isEmbedded={isEmbedded}
        items={pageNavigationItems}
      />
    </DefaultLayout>
  );
}
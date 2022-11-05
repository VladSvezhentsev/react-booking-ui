import ContentLoader from "react-content-loader";

function Skeleton() {
   return (
      <ContentLoader
         speed={2}
         width={740}
         height={230}
         viewBox="0 0 740 230"
         backgroundColor="#f3f3f3"
         foregroundColor="#ecebeb"
      >
         <rect x="209" y="0" rx="0" ry="0" width="150" height="24" />
         <rect x="209" y="33" rx="0" ry="0" width="120" height="17" />
         <rect x="209" y="59" rx="5" ry="5" width="89" height="23" />
         <rect x="209" y="96" rx="0" ry="0" width="89" height="17" />
         <rect x="620" y="0" rx="0" ry="0" width="130" height="26" />
         <rect x="670" y="118" rx="0" ry="0" width="50" height="50" />
         <rect x="620" y="178" rx="5" ry="5" width="105" height="36" />
         <rect x="0" y="0" rx="0" ry="0" width="200" height="200" />
         <rect x="209" y="129" rx="0" ry="0" width="200" height="34" />
      </ContentLoader>
   );
}

export default Skeleton;

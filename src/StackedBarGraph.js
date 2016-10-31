// import React from 'react';
//
// const StackedBarGraph = ({ width, height, children }) => {
//   const values = children.map(dataPoint => dataPoint.props.value);
//   const sum = values.reduce((a, b) => a + b, 0);
//   const width = values.map(dataPoint => width / sum * dataPoint);
//   const startingPoints = values.map((value, index) => {
//     return widths.slice(0, index).reduce((a, b) => a + b, 0);
//   });
//
//
//   return (
//     <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
//       <g>
//         <p>You're amazing graph goes here.'</p>
//       </g>
//     </svg>
//   );
// }
//
// StackedBarGraph.defaultProps = {
//   width: 600,
//   height: 40,
// };
//
// StackedBarGraph.propTypes = {
//   width: React.PropTypes.number.isRequired,
//   height: React.PropTypes.number.isRequired
// };
//
// export default StackedBarGraph;

import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { DoneFilter } from "../redux/Actions";
import { Done_Filter } from "../filter";

const DoneFilters = ({ activeFilter, Filter }) => {
  return (
    <div className="done-filters">
      {Object.keys(DoneFilter).map(filterKey => {
        const currentFilter = DoneFilter[filterKey];
        return (
          <span
            key={`done-filter-${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === activeFilter && "filter--active"
            )}
            onClick={() => {
              Filter(currentFilter);
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return { activeFilter: state.Filter };
};
export default connect(
  mapStateToProps,
  { DoneFilter }
)(DoneFilters);
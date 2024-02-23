import WorkingWithArrays from "../arrays/WorkingWithArrays";
import ArrowFunction from "../functions/ArrowFunctions";
import LegacyES5Function from "../functions/ES5Function";
import FunctionParanthesisAndParameters from "../functions/FunctionParanthesisAndParameters";
import ImpliedReturn from "../functions/ImpliedReturn";

function WorkingWithFunctions() {
    return(
        <div>
           <LegacyES5Function/>
           <ArrowFunction/>
           <ImpliedReturn/>
           <FunctionParanthesisAndParameters/>
           <WorkingWithArrays/>
        </div>
     );
    }

export default WorkingWithFunctions
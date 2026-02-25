import { 
  FaRobot, 
  FaCity, 
  FaLightbulb, 
  FaClipboardList, 
  FaExclamationTriangle 
} from "react-icons/fa";
const AiCard = ({item}) => {
  return (
    <div
  className="group relative bg-white/70 backdrop-blur-xl 
  rounded-3xl p-[1px] shadow-lg 
  hover:shadow-2xl transition-all duration-500"
>
  <div className="relative bg-white rounded-3xl p-8 ">

    <div className="flex items-center gap-3 mb-6">
      <div className="bg-emerald-100 p-3 rounded-2xl">
        <FaCity className="text-emerald-600 text-xl" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-800">
          {item.city}
        </h3>
        <p className="text-sm text-gray-400 flex items-center gap-2">
          <FaRobot /> AI Weather Intelligence
        </p>
      </div>
    </div>

    <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6"></div>
    <div className="flex items-start gap-4 mb-5">
      <div className="bg-blue-100 p-3 rounded-xl">
        <FaClipboardList className="text-blue-600" />
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          Summary
        </p>
        <p className="text-gray-700 leading-relaxed mt-1">
          {item.summary}
        </p>
      </div>
    </div>

    <div className="flex items-start gap-4 mb-5">
      <div className="bg-yellow-100 p-3 rounded-xl">
        <FaLightbulb className="text-yellow-600" />
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          Smart Advice
        </p>
        <p className="text-gray-700 leading-relaxed mt-1">
          {item.advice}
        </p>
      </div>
    </div>

    {item.alerts?.length > 0 && (
      <div className="mt-6 bg-red-50 border border-red-200 rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <FaExclamationTriangle className="text-red-600" />
          <p className="font-semibold text-red-600">
            Weather Alerts
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {item.alerts.map((alert, i) => (
            <span
              key={i}
              className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
            >
              {alert}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>
</div>
  )
}

export default AiCard
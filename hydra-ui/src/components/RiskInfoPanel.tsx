import React from 'react';

const RiskInfoPanel = ({riskName, riskCategory, description, risks, recommendations, actions}: any) => {
    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div
                className="border-r border-b border-l border-t border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">{riskName}</div>
                    <p className="text-sm text-gray-600 flex items-center">
                        Category: {riskCategory}
                    </p>
                    <p className="text-gray-700 text-base">{description}</p>
                </div>
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">Risks</div>
                    <ul className="list-disc pl-5">
                        {(risks || []).map((risk: any, index: any) => (
                            <li key={index} className="text-gray-700 text-base">{risk}</li>
                        ))}
                    </ul>
                </div>
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">Recommendations</div>
                    <p className="text-gray-700 text-base">{recommendations}</p>
                </div>
                {/* New Section for Possible Actions */}
                <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">Possible Actions</div>
                    <ul className="list-disc pl-5">
                        {(actions || []).map((action: any, index: any) => (
                            <li key={index} className="text-gray-700 text-base">{action}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RiskInfoPanel;

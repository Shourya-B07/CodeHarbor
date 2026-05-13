import React from 'react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-300 p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <p className="mb-4">
          Welcome to CodeHarbor! By accessing or using our services, you agree to be bound by these Terms of Service.
        </p>
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Acceptable Use</h2>
        <p className="mb-4">
          You agree not to use our services for any unlawful purpose or in any way that interrupts, damages, or impairs the service. You are responsible for all activity that occurs under your account.
        </p>
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Code Execution</h2>
        <p className="mb-4">
          CodeHarbor provides a platform for code execution. We reserve the right to monitor and terminate any processes that violate our security guidelines or consume excessive resources.
        </p>
      </div>
    </div>
  );
}

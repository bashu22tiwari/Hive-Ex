import React from 'react';

export interface JobProfile {
  title: string;
  description: string;
  competencies: string[];
  estimatedSalaryRange: string;
  seniorityLevel: string;
}

export enum NavRoute {
  HOME = '/',
  ABOUT = '/about',
  SERVICES = '/services',
  CONTACT = '/contact',
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
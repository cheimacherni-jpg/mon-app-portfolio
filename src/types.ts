/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  category: "uxui" | "web" | "event";
  images: string[];
  prototypeUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
}

export interface Skill {
  name: string;
  category: "hard" | "soft";
  iconName?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Formation {
  id: string;
  degree: string;
  school: string;
  year: string;
  details?: string;
}

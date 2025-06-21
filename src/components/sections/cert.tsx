'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Award,
  Calendar,
  ExternalLink,
  Building2,
  ChevronDown,
  ChevronUp,
  Eye
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../layouts/container';

// Mock data
const certificatesData = [
  {
    id: 1,
    name: 'AWS Certified Solutions Architect',
    organization: 'Amazon Web Services',
    issueDate: '2024-03-15',
    expiryDate: '2027-03-15',
    credentialId: 'AWS-SAA-2024-001',
    status: 'Active',
    level: 'Professional',
    image: '/placeholder.svg?height=200&width=300',
    verificationUrl: 'https://aws.amazon.com/verification',
    description: 'Validates expertise in designing distributed systems on AWS'
  },
  {
    id: 2,
    name: 'Google Cloud Professional Developer',
    organization: 'Google Cloud',
    issueDate: '2024-01-20',
    expiryDate: '2026-01-20',
    credentialId: 'GCP-PD-2024-002',
    status: 'Active',
    level: 'Professional',
    image: '/placeholder.svg?height=200&width=300',
    verificationUrl: 'https://cloud.google.com/certification',
    description:
      'Demonstrates ability to build scalable applications on Google Cloud'
  },
  {
    id: 3,
    name: 'Microsoft Azure Fundamentals',
    organization: 'Microsoft',
    issueDate: '2023-11-10',
    expiryDate: '2025-11-10',
    credentialId: 'AZ-900-2023-003',
    status: 'Active',
    level: 'Fundamental',
    image: '/placeholder.svg?height=200&width=300',
    verificationUrl: 'https://learn.microsoft.com/credentials',
    description: 'Foundational knowledge of cloud services and Azure'
  },
  {
    id: 4,
    name: 'Certified Kubernetes Administrator',
    organization: 'Cloud Native Computing Foundation',
    issueDate: '2023-09-05',
    expiryDate: '2026-09-05',
    credentialId: 'CKA-2023-004',
    status: 'Active',
    level: 'Professional',
    image: '/placeholder.svg?height=200&width=300',
    verificationUrl: 'https://www.cncf.io/certification',
    description: 'Validates skills in Kubernetes administration'
  },
  {
    id: 5,
    name: 'Docker Certified Associate',
    organization: 'Docker Inc.',
    issueDate: '2023-06-12',
    expiryDate: '2025-06-12',
    credentialId: 'DCA-2023-005',
    status: 'Active',
    level: 'Associate',
    image: '/placeholder.svg?height=200&width=300',
    verificationUrl: 'https://docker.com/certification',
    description: 'Demonstrates proficiency in Docker containerization'
  },
  {
    id: 6,
    name: 'React Developer Certification',
    organization: 'Meta',
    issueDate: '2023-04-18',
    expiryDate: '2025-04-18',
    credentialId: 'META-REACT-2023-006',
    status: 'Active',
    level: 'Professional',
    image: '/placeholder.svg?height=200&width=300',
    verificationUrl: 'https://developers.facebook.com/certification',
    description: 'Advanced React development skills and best practices'
  },
  {
    id: 7,
    name: 'Node.js Application Developer',
    organization: 'OpenJS Foundation',
    issueDate: '2023-02-10',
    expiryDate: '2025-02-10',
    credentialId: 'JSNAD-2023-007',
    status: 'Active',
    level: 'Professional',
    image: '/placeholder.svg?height=200&width=300',
    verificationUrl: 'https://openjsf.org/certification',
    description: 'Professional Node.js application development skills'
  },
  {
    id: 8,
    name: 'MongoDB Certified Developer',
    organization: 'MongoDB Inc.',
    issueDate: '2022-12-05',
    expiryDate: '2024-12-05',
    credentialId: 'MDB-DEV-2022-008',
    status: 'Active',
    level: 'Associate',
    image: '/placeholder.svg?height=200&width=300',
    verificationUrl: 'https://university.mongodb.com/certification',
    description: 'MongoDB database development and administration'
  }
];

const INITIAL_DISPLAY_COUNT = 6;

const getLevelColor = (level: string) => {
  switch (level.toLowerCase()) {
    case 'fundamental':
      return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
    case 'associate':
      return 'bg-green-100 text-green-800 hover:bg-green-200';
    case 'professional':
      return 'bg-purple-100 text-purple-800 hover:bg-purple-200';
    default:
      return 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200';
  }
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

interface CertificateCardProps {
  cert: (typeof certificatesData)[0];
  isExpanded: boolean;
  onToggle: () => void;
}

function CertificateCard({ cert, isExpanded, onToggle }: CertificateCardProps) {
  return (
    <Card className='group border border-zinc-200 bg-white transition-all duration-300 hover:shadow-lg dark:border-zinc-700 dark:bg-zinc-800 dark:hover:shadow-zinc-900/30'>
      {/* Minimal View */}
      <div className='cursor-pointer' onClick={onToggle}>
        <CardHeader className='pb-3'>
          <div className='flex items-start gap-3'>
            <div className='relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100 sm:h-16 sm:w-16'>
              <Image
                src={cert.image || '/placeholder.svg'}
                alt={cert.name}
                fill
                className='object-cover'
              />
            </div>
            <div className='min-w-0 flex-1'>
              <div className='flex items-start justify-between gap-2'>
                <CardTitle className='line-clamp-2 text-base font-semibold text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-white'>
                  {cert.name}
                </CardTitle>
                <div className='flex flex-shrink-0 items-center gap-2'>
                  <Badge
                    className={`${getLevelColor(cert.level)} text-xs`}
                    variant='secondary'
                  >
                    {cert.level}
                  </Badge>
                  {isExpanded ? (
                    <ChevronUp className='h-4 w-4 text-zinc-400 dark:text-zinc-500' />
                  ) : (
                    <ChevronDown className='h-4 w-4 text-zinc-400 dark:text-zinc-500' />
                  )}
                </div>
              </div>
              <div className='mt-1 flex items-center gap-2'>
                <Building2 className='h-3 w-3 text-zinc-400 dark:text-zinc-500' />
                <span className='truncate text-sm text-zinc-600 dark:text-zinc-300'>
                  {cert.organization}
                </span>
              </div>
              <div className='mt-1 flex items-center gap-2'>
                <Calendar className='h-3 w-3 text-zinc-400 dark:text-zinc-500' />
                <span className='text-xs text-zinc-500 dark:text-zinc-400'>
                  {formatDate(cert.issueDate)}
                </span>
              </div>
            </div>
          </div>
        </CardHeader>
      </div>

      {/* Expanded View */}
      {isExpanded && (
        <CardContent className='pt-0 duration-300 animate-in slide-in-from-top-2'>
          <div className='space-y-4 border-t pt-4'>
            {/* Full Image */}
            <div className='relative h-24 w-full overflow-hidden rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100 sm:h-32'>
              <Image
                src={cert.image || '/placeholder.svg'}
                alt={cert.name}
                fill
                className='object-cover'
              />
            </div>

            {/* Description */}
            <CardDescription className='text-zinc-600 dark:text-zinc-300'>
              {cert.description}
            </CardDescription>

            {/* Details */}
            <div className='space-y-3'>
              <div className='flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300'>
                <Calendar className='h-4 w-4' />
                <span>Expires: {formatDate(cert.expiryDate)}</span>
              </div>

              <div className='rounded-lg bg-zinc-50 p-3 dark:bg-zinc-700'>
                <p className='mb-1 text-xs text-zinc-500 dark:text-zinc-400'>
                  Credential ID
                </p>
                <p className='font-mono text-sm text-zinc-800 dark:text-zinc-200'>
                  {cert.credentialId}
                </p>
              </div>

              <Link
                href={cert.verificationUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='group/link inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800'
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className='h-4 w-4 transition-transform group-hover/link:translate-x-1' />
                Verify Certificate
              </Link>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
}

export default function CertificatesSection() {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const [showAll, setShowAll] = useState(false);

  const displayedCertificates = showAll
    ? certificatesData
    : certificatesData.slice(0, INITIAL_DISPLAY_COUNT);

  const toggleCard = (id: number) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <Container>
      <div className='mx-auto max-w-7xl'>
        {/* Header */}
        <div className='mb-12 text-center'>
          <div className='mb-4 flex items-center justify-center'>
            <Award className='mr-3 h-8 w-8 text-blue-600' />
            <h2 className='text-3xl font-bold text-zinc-900 dark:text-white sm:text-4xl'>
              Certificates & Achievements
            </h2>
          </div>
          <p className='mx-auto max-w-3xl text-xl text-zinc-600 dark:text-zinc-300'>
            Professional certifications and skills I&apos;ve achieved throughout
            my career development
          </p>
          <div className='mt-6 flex items-center justify-center gap-6 text-sm text-zinc-500 dark:text-zinc-400'>
            <div className='flex items-center gap-2'>
              <div className='h-3 w-3 rounded-full bg-green-500'></div>
              <span>
                {
                  certificatesData.filter((cert) => cert.status === 'Active')
                    .length
                }{' '}
                Active Certificates
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <Eye className='h-4 w-4' />
              <span>Click to view details</span>
            </div>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className='mb-8 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
          {displayedCertificates.map((cert) => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              isExpanded={expandedCards.has(cert.id)}
              onToggle={() => toggleCard(cert.id)}
            />
          ))}
        </div>

        {/* Load More Button */}
        {!showAll && certificatesData.length > INITIAL_DISPLAY_COUNT && (
          <div className='text-center'>
            <Button
              onClick={handleShowAll}
              variant='outline'
              size='lg'
              className='border-zinc-300 bg-white hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-800 dark:hover:bg-zinc-700'
            >
              Show more {certificatesData.length - INITIAL_DISPLAY_COUNT} more
              certificates
              <ChevronDown className='ml-2 h-4 w-4' />
            </Button>
          </div>
        )}

        {/* Quick Stats */}
        <div className='mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4'>
          <div className='rounded-lg bg-white p-4 text-center shadow-sm dark:bg-zinc-800 dark:shadow-zinc-900/20'>
            <div className='mb-1 text-2xl font-bold text-blue-600'>
              {certificatesData.length}
            </div>
            <div className='text-sm text-zinc-600 dark:text-zinc-300'>
              Total Certificates
            </div>
          </div>
          <div className='rounded-lg bg-white p-4 text-center shadow-sm dark:bg-zinc-800 dark:shadow-zinc-900/20'>
            <div className='mb-1 text-2xl font-bold text-green-600'>
              {
                certificatesData.filter((cert) => cert.status === 'Active')
                  .length
              }
            </div>
            <div className='text-sm text-zinc-600 dark:text-zinc-300'>
              Active
            </div>
          </div>
          <div className='rounded-lg bg-white p-4 text-center shadow-sm dark:bg-zinc-800 dark:shadow-zinc-900/20'>
            <div className='mb-1 text-2xl font-bold text-purple-600'>
              {
                certificatesData.filter((cert) => cert.level === 'Professional')
                  .length
              }
            </div>
            <div className='text-sm text-zinc-600 dark:text-zinc-300'>
              Professional
            </div>
          </div>
          <div className='rounded-lg bg-white p-4 text-center shadow-sm dark:bg-zinc-800 dark:shadow-zinc-900/20'>
            <div className='mb-1 text-2xl font-bold text-orange-600'>
              {new Date().getFullYear() - 2022}
            </div>
            <div className='text-sm text-zinc-600 dark:text-zinc-300'>
              Years Experience
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

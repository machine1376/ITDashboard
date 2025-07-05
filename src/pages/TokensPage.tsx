import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Copy, Download, Filter, Palette, Type, Space as Spacing, Layers, ListOrdered as BorderAll, Zap, Check, ExternalLink } from 'lucide-react';
import { tokens } from '../data/mockData';
import { Token } from '../types';

const TokensPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Tokens', icon: Filter },
    { id: 'colors', name: 'Colors', icon: Palette },
    { id: 'typography', name: 'Typography', icon: Type },
    { id: 'spacing', name: 'Spacing', icon: Spacing },
    { id: 'shadows', name: 'Shadows', icon: Layers },
    { id: 'borders', name: 'Borders', icon: BorderAll },
    { id: 'animations', name: 'Animations', icon: Zap },
  ];

  const filteredTokens = tokens.filter(token => {
    const matchesSearch = token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         token.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || token.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCopyToken = (token: Token) => {
    navigator.clipboard.writeText(token.cssVariable);
    setCopiedToken(token.id);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const renderTokenPreview = (token: Token) => {
    switch (token.category) {
      case 'colors':
        return (
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full border-2 border-gray-200 dark:border-gray-700"
              style={{ backgroundColor: token.value }}
            />
            <div>
              <p className="font-mono text-sm">{token.value}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">HEX Color</p>
            </div>
          </div>
        );
      case 'typography':
        return (
          <div>
            <p className="font-mono text-sm mb-1">{token.value}</p>
            <p
              className="text-lg"
              style={{ fontFamily: token.value }}
            >
              Sample Text
            </p>
          </div>
        );
      case 'spacing':
        return (
          <div className="flex items-center gap-3">
            <div
              className="bg-blue-100 dark:bg-blue-900 border-2 border-blue-300 dark:border-blue-700"
              style={{
                width: token.value,
                height: token.value,
                minWidth: '16px',
                minHeight: '16px'
              }}
            />
            <div>
              <p className="font-mono text-sm">{token.value}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Spacing Unit</p>
            </div>
          </div>
        );
      case 'shadows':
        return (
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 bg-white dark:bg-gray-800 rounded border"
              style={{ boxShadow: token.value }}
            />
            <div>
              <p className="font-mono text-sm">{token.value}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Box Shadow</p>
            </div>
          </div>
        );
      default:
        return (
          <div>
            <p className="font-mono text-sm">{token.value}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">CSS Value</p>
          </div>
        );
    }
  };

  const exportTokens = () => {
    const cssVariables = filteredTokens
      .map(token => `  ${token.cssVariable}: ${token.value};`)
      .join('\n');
    
    const cssContent = `:root {\n${cssVariables}\n}`;
    
    const blob = new Blob([cssContent], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'design-tokens.css';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Style Sheet</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Design tokens and CSS variables for consistent styling
          </p>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search tokens..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button onClick={exportTokens} variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export CSS
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Documentation
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center gap-2"
                  >
                    <Icon className="w-4 h-4" />
                    {category.name}
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Token Results */}
        <div className="mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Showing {filteredTokens.length} of {tokens.length} tokens
          </p>
        </div>

        {/* Token Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredTokens.map((token) => (
            <Card key={token.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-lg">{token.name}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {token.category}
                    </Badge>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleCopyToken(token)}
                    className="h-8 px-2"
                  >
                    {copiedToken === token.id ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
                <CardDescription className="text-sm">
                  {token.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Token Preview */}
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    {renderTokenPreview(token)}
                  </div>

                  {/* CSS Variable */}
                  <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-3">
                    <p className="text-green-400 font-mono text-sm">
                      {token.cssVariable}
                    </p>
                  </div>

                  {/* Usage Examples */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Usage Examples:</h4>
                    <div className="flex flex-wrap gap-1">
                      {token.usage.map((usage, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {usage}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Code Example */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">CSS Usage:</h4>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded p-2 text-sm font-mono">
                      <span className="text-blue-600 dark:text-blue-400">color</span>
                      <span className="text-gray-600 dark:text-gray-300">: </span>
                      <span className="text-green-600 dark:text-green-400">var({token.cssVariable})</span>
                      <span className="text-gray-600 dark:text-gray-300">;</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTokens.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                No tokens found matching your search criteria.
              </p>
              <Button onClick={() => {setSearchTerm(''); setSelectedCategory('all');}}>
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TokensPage;
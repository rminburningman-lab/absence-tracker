import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Card } from '../components/ui/Card';
import { SectionHeader } from '../components/ui/SectionHeader';
import { colors, spacing, typography } from '../theme';

export function AnalyticsScreen() {
  return (
    <LinearGradient colors={['#060816', '#101830', '#1d2748']} style={styles.background}>
      <View style={styles.container}>
        <SectionHeader title="Analytics" hint="Emotional patterns become visible over time." />
        <Card style={styles.card}>
          <Text style={styles.title}>Mood and reflection trends</Text>
          <Text style={styles.body}>Charts and insights will be added here as the experience grows.</Text>
        </Card>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  container: { flex: 1, padding: spacing.lg, paddingTop: 56 },
  card: { marginTop: spacing.md },
  title: { color: colors.textPrimary, fontSize: typography.subtitle, fontWeight: '600', marginBottom: 6 },
  body: { color: colors.textSecondary, fontSize: typography.body, lineHeight: 20 },
});
